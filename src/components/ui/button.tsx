import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-primary-intense text-primary-foreground hover:shadow-neon hover:scale-[1.02] border border-primary/20",
        destructive: "bg-gradient-to-r from-destructive to-red-600 text-destructive-foreground hover:shadow-lg hover:scale-[1.02] border border-destructive/20",
        outline: "border-2 border-primary/30 bg-background/50 backdrop-blur-sm text-primary hover:bg-primary/5 hover:border-primary/50 hover:shadow-neon/50",
        secondary: "bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground hover:from-secondary/90 hover:to-secondary/70 border border-border/50",
        ghost: "text-muted-foreground hover:bg-accent/10 hover:text-accent-foreground hover:backdrop-blur-sm",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-intense",
        modern: "bg-gradient-to-r from-background to-background/90 border border-primary/20 text-foreground hover:border-primary/40 hover:shadow-cyber backdrop-blur-sm",
        tech: "bg-primary/5 border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 backdrop-blur-md",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
