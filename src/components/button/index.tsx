import React from "react";
import { ButtonMain, ButtonMainProps } from "@/components/button/button.style";

interface IButtonProps
  extends ButtonMainProps,
    Omit<React.HTMLAttributes<HTMLButtonElement>, "color"> {
  children: React.ReactNode;
}

const Button = ({
  color,
  $backgroundcolor,
  children,
  ...otherProps
}: IButtonProps) => {
  return (
    <ButtonMain
      color={color}
      $backgroundcolor={$backgroundcolor}
      {...otherProps}
    >
      {children}
    </ButtonMain>
  );
};

export default Button;
