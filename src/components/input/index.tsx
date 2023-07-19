import React from "react";
import {InputBox, InputElement, InputIconBox} from "@/components/input/input.style";

interface InputProps{
    icon: any;
    placeholder: string;
    $marginTop: string;
}

const Input = (props:InputProps) => {
    return(
        <InputBox $marginTop={props.$marginTop}>
            <InputElement placeholder={props.placeholder} />
            <InputIconBox>
            {props.icon}
            </InputIconBox>
        </InputBox>
    )
};

export default Input;