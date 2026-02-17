import { ButtonHTMLAttributes } from "react";

const baseStyles =
  "inline-flex items-center justify-center rounded-md bg-tsehAccent px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tsehAccent disabled:cursor-not-allowed disabled:opacity-60";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className = "", type = "button", ...props }: ButtonProps) {
  return <button className={`${baseStyles} ${className}`} type={type} {...props} />;
}

export function buttonClassName(className = "") {
  return `${baseStyles} ${className}`;
}
