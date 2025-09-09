import { cva } from "class-variance-authority";

export const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-gray-100", "hover:bg-gray-300"],
      ghost: ["hover:bg-gray-100"],
      dark: ["bg-gray-800", "hover:bg-gray-600", "text-white"],
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-content",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
