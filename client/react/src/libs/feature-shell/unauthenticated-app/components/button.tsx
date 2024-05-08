import { twMerge } from "tailwind-merge";

export type AppButtonProps = {
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  size?: string;
};

type ButtonProps = JSX.IntrinsicElements["button"] & AppButtonProps;

export function Button({
  className,
  disabled = false,
  isLoading,
  size,
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      className={getButtonClassName({
        disabled,
        className: className,
        isLoading,
        size,
      })}
      disabled={disabled}
      {...buttonProps}
    />
  );
}

function getButtonClassName({
  disabled,
  className,
  isLoading,
  size = "medium",
}: AppButtonProps) {
  const baseClass = twMerge(
    "flex gap-2 rounded-md items-center justify-center text-white",
    size === "small" && "px-3 h-6 text-sm",
    size === "medium" && "px-4 h-9 text-md",
    size === "large" && "px-5 h-12 text-lg",
    disabled ? "bg-gray-400" : "bg-primary hover:opacity-80"
  );

  const disabledClass = disabled
    ? "cursor-not-allowed"
    : "transition-colors duration-200";

  const loadingClass = isLoading
    ? "animate-pulse pointer-events-none touch-none"
    : "";

  return twMerge(baseClass, disabledClass, loadingClass, className);
}
