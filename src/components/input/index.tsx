import { themeColors } from "@/global/theme";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef, memo } from "react";
import { IconType } from "react-icons";

const inputVariants = cva(
  "border border-gray-default text-gray-default px-4 pr-4 py-2 rounded-lg w-full",
  {
    variants: {
      variant: {
        default: "justify-center",
        startIcon: "pl-10",
        bothIcons: "pr-10 pl-10",
        endIcon: "pr-10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type InputProps = {
  asChild?: boolean;
  startIcon?: IconType;
  endIcon?: IconType;
  endIconFunction?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>;

const iconSize = 20;

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    asChild,
    children,
    variant,
    className,
    startIcon: StartIcon,
    endIcon: EndIcon,
    endIconFunction,
    ...props
  },
  ref
) => {
  const Comp = "input";

  return (
    <div className="relative">
      {!!StartIcon && (
        <div
          className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
        >
          <StartIcon size={iconSize} fill={themeColors.gray.light} />
        </div>
      )}
      <Comp
        className={cn(inputVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
      {!!EndIcon ? (
        endIconFunction ? (
          <button
            className="absolute inset-y-0 right-0 pr-3  
                      flex items-center  
                      pointer-events-auto"
            onClick={endIconFunction}
          >
            <EndIcon size={iconSize} fill={themeColors.primary} />
          </button>
        ) : (
          <div
            className="absolute inset-y-0 right-0 pr-3  
                      flex items-center  
                      pointer-events-none"
          >
            <EndIcon size={iconSize} fill={themeColors.primary} />
          </div>
        )
      ) : null}
    </div>
  );
};

export default memo(forwardRef(Input));
