import { cn } from "@/lib/utils";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef, memo } from "react";
import { IconType } from "react-icons";

const buttonVariants = cva(
  "px-8 font-medium flex items-center gap-2 py-4 rounded-md w-auto",
  {
    variants: {
      variant: {
        default: "bg-secondary text-white justify-center",
        primary: "bg-primary text-white",
        outline: "bg-white text-slate-dark",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type ButtonProps = {
  asChild?: boolean;
  startIcon?: IconType;
  endIcon?: IconType;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const iconSize = 26;

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    asChild,
    children,
    variant,
    className,
    startIcon: StartIcon,
    endIcon: EndIcon,
    ...props
  },
  ref
) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant }), className)}
      ref={ref}
      {...props}
    >
      {!!StartIcon && <StartIcon size={iconSize} />}
      <Slottable>{children}</Slottable>
      {!!EndIcon && <EndIcon size={iconSize} />}
    </Comp>
  );
};

export default memo(forwardRef(Button));
