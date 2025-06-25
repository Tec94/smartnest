import React, { useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";

interface SwipeNavigatorProps {
  current: React.ReactNode;
  onNavigate: (direction: "left" | "right") => void;
  nextPageName?: string;
  prevPageName?: string;
}

const SWIPE_THRESHOLD = 0.18; // % of width to trigger navigation

export const SwipeNavigator: React.FC<SwipeNavigatorProps> = ({
  current,
  onNavigate,
  nextPageName = "Next",
  prevPageName = "Previous",
}) => {
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlers = useSwipeable({
    onSwiping: (e) => {
      setIsDragging(true);
      setDragX(e.deltaX);
    },
    onSwiped: (e) => {
      setIsDragging(false);
      const width = containerRef.current?.offsetWidth || 1;
      if (e.absX > width * SWIPE_THRESHOLD) {
        if (e.dir === "Left") onNavigate("left");
        else if (e.dir === "Right") onNavigate("right");
      } else {
        setDragX(0);
      }
    },
    trackMouse: true,
    trackTouch: true,
    preventScrollOnSwipe: true,
  });

  // Clamp dragX to [-width, width]
  const width = containerRef.current?.offsetWidth || 1;
  const clampedX = Math.max(Math.min(dragX, width), -width);

  return (
    <div {...handlers} ref={containerRef} className="relative overflow-hidden min-h-screen w-full">
      {/* Previous page preview - only render if swiping right */}
      {isDragging && dragX > 0 && (
        <motion.div
          className="absolute top-0 left-0 h-full w-full z-10 bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center"
          style={{
            x: clampedX - width,
            boxShadow: "4px 0 16px 0 rgba(0,0,0,0.08)",
            pointerEvents: 'none',
          }}
          initial={{ x: -width }}
          animate={{ x: clampedX - width }}
          exit={{ x: -width }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="text-center text-muted-foreground">
            <div className="text-2xl font-semibold mb-2">{prevPageName}</div>
            <div className="text-sm">Swipe to navigate</div>
          </div>
        </motion.div>
      )}
      {/* Current page */}
      <motion.div
        className="relative z-20"
        style={{ x: isDragging ? clampedX : 0 }}
        animate={{ x: isDragging ? clampedX : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {current}
      </motion.div>
      {/* Next page preview - only render if swiping left */}
      {isDragging && dragX < 0 && (
        <motion.div
          className="absolute top-0 left-0 h-full w-full z-10 bg-gradient-to-r from-indigo-100 to-blue-50 flex items-center justify-center"
          style={{
            x: clampedX + width,
            boxShadow: "-4px 0 16px 0 rgba(0,0,0,0.08)",
            pointerEvents: 'none',
          }}
          initial={{ x: width }}
          animate={{ x: clampedX + width }}
          exit={{ x: width }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="text-center text-muted-foreground">
            <div className="text-2xl font-semibold mb-2">{nextPageName}</div>
            <div className="text-sm">Swipe to navigate</div>
          </div>
        </motion.div>
      )}
    </div>
  );
}; 