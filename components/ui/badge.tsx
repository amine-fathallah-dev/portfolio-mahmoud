import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
        secondary:
          "border-blue-500/30 bg-blue-500/10 text-blue-300",
        outline:
          "border-black/15 dark:border-white/20 bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-300",
        vip: "border-cyan-500/50 bg-cyan-500/20 text-cyan-200 font-bold",
        level:
          "border-blue-500/40 bg-blue-500/15 text-blue-300",
        n1: "border-slate-500/40 bg-slate-500/15 text-slate-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
