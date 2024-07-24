import * as React from "react";

import { cn } from "@/lib/utils";
import { useController } from "react-hook-form";

const Input = React.forwardRef(
  ({ control, className, type, ...props }, ref) => {
    const { field } = useController({
      control,
      name: props.name,
      defaultValue: "",
    });
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0  file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...field}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
