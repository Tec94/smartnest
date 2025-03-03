import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

interface Machine {
  id: string;
  name: string;
  basePrice: number;
}

const machines: Machine[] = [
  { id: "incubator", name: "AI-Integrated Incubator", basePrice: 10000 },
];

interface QuoteItem {
  machineId: string;
  quantity: number;
}

const QuoteCalculator = () => {
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  
  const form = useForm<QuoteItem>({
    defaultValues: {
      machineId: "",
      quantity: 1,
    },
  });

  const addItemToQuote = (data: QuoteItem) => {
    const newItems = [...quoteItems, data];
    setQuoteItems(newItems);
    calculateTotal(newItems);
    form.reset();
  };

  const calculateTotal = (items: QuoteItem[]) => {
    const total = items.reduce((sum, item) => {
      const machine = machines.find(m => m.id === item.machineId);
      return sum + (machine?.basePrice ?? 0) * item.quantity;
    }, 0);
    setTotalPrice(total);
  };

  const removeItem = (index: number) => {
    const newItems = quoteItems.filter((_, i) => i !== index);
    setQuoteItems(newItems);
    calculateTotal(newItems);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6">Business Equipment Quote Calculator</h2>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(addItemToQuote)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="machineId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Equipment</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a machine" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {machines.map((machine) => (
                          <SelectItem key={machine.id} value={machine.id}>
                            {machine.name} - ${machine.basePrice.toLocaleString()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        min="1"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            
            <Button type="submit" className="w-full">Add to Quote</Button>
          </form>
        </Form>

        {quoteItems.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Quote Summary</h3>
            <div className="space-y-4">
              {quoteItems.map((item, index) => {
                const machine = machines.find(m => m.id === item.machineId);
                const itemTotal = (machine?.basePrice ?? 0) * item.quantity;
                
                return (
                  <div key={index} className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium">{machine?.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.quantity} x ${machine?.basePrice.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="font-semibold">${itemTotal.toLocaleString()}</p>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeItem(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                );
              })}
              
              <div className="flex justify-between items-center pt-4 border-t">
                <p className="text-xl font-bold">Total Estimate</p>
                <p className="text-xl font-bold">${totalPrice.toLocaleString()}</p>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default QuoteCalculator;