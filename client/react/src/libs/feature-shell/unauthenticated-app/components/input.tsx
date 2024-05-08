import { ComponentPropsWithRef, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { twMerge } from "tailwind-merge";

export type InputProps = ComponentPropsWithRef<"input"> & {
  error?: FieldError;
  disabled?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, error, className, disabled, ...props }, ref) => {
    const inputClass = twMerge(
      "rounded-md border border-gray-200 text-gray-600 text-sm leading-md px-3 py-2 placeholder:text-gray-400",
      "focus:outline-0 focus:ring-0 focus:border-gray-400 hover:border-gray-400",
      error && "border-error focus:border-error hover:border-error",
      disabled && "bg-gray-200 placeholder:text-gray-600",
      className
    );

    return (
      <input
        className={inputClass}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        ref={ref}
        name={name}
        disabled={disabled}
        {...props}
      />
    );
  }
);
