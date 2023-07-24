import React from "react";
import {
  InputBox,
  InputElement,
  InputIconBox,
} from "@/components/input/input.style";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  icon: any;
  placeholder: string;
  $marginTop: string;
}

const Input = ({
  icon,
  $marginTop,
  placeholder,
  ...otherProps
}: InputProps) => {
  return (
    <InputBox $marginTop={$marginTop}>
      <InputElement placeholder={placeholder} {...otherProps} />
      <InputIconBox>{icon}</InputIconBox>
    </InputBox>
  );
};

export default Input;
