import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

const DesktopNav = () => {
  const linkClassName =
    "nav-link-underline group inline-flex h-auto w-max items-center justify-center rounded-lg bg-transparent px-3 pt-2 pb-3 text-sm font-medium transition-colors duration-200 ease-in-out hover:bg-white/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-foreground";

  return (
    <>
      <div className="flex-1 flex justify-center">
        <NavigationMenu>
          <NavigationMenuList className="gap-4">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link to={link.href}>
                  <NavigationMenuLink
                    className={cn(
                      linkClassName,
                      window.location.pathname === link.href && "bg-white/20"
                    )}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/about#contact">
          <Button variant="outline">Contact Sales</Button>
        </Link>
        <Link to="/products">
          <Button>Get Started</Button>
        </Link>
      </div>
    </>
  );
};

const MobileNav = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent>
      <div className="flex flex-col gap-6 pt-12">
        {navLinks.map((link) => (
          <SheetClose asChild key={link.href}>
            <Link
              to={link.href}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          </SheetClose>
        ))}
        <div className="border-t pt-6 flex flex-col gap-4">
          <SheetClose asChild>
            <Link to="/about#contact">
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link to="/products">
              <Button className="w-full">Get Started</Button>
            </Link>
          </SheetClose>
        </div>
      </div>
    </SheetContent>
  </Sheet>
);

const Navigation = () => {
  const isMobile = useIsMobile();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="font-display text-xl font-bold text-foreground"
          >
            SmartNest.ai
          </Link>
          {isMobile ? <MobileNav /> : <DesktopNav />}
        </div>
      </div>
    </div>
  );
};

export default Navigation;