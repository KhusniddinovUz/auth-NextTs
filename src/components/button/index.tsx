import React from "react";
import {ButtonMain, ButtonMainProps} from "@/components/button/button.style";

interface IButtonProps extends ButtonMainProps{
    children: React.ReactNode
}

const Button = (props:IButtonProps) =>{
    return <ButtonMain color={props.color} $backgroundcolor={props.$backgroundcolor}>
        {props.children}
    </ButtonMain>
};

export default Button;