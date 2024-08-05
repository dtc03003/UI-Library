import { ReactNode } from "react";
import * as S from "./Button.styled";

// type Variant = "default" | "primary" | "success" | "warning" | "error";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  fontSize?: string;
  children: ReactNode;
}

export default function Button({ className, children, ...rest }: ButtonProps) {
  return (
    <S.Button className={className} {...rest}>
      {children}
    </S.Button>
  );
}
