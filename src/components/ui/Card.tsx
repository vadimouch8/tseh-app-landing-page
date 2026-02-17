import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return <article className={`rounded-xl bg-tsehCard shadow-card ${className}`}>{children}</article>;
}
