import React from "react";
import {BaseLayoutElement, SliderContainer, InputContainer} from './base-layout.style';

interface JSXElement {
    children: React.ReactNode
}

const BaseLayout = ({children}:JSXElement) => {
    return(
        <BaseLayoutElement>
            <InputContainer>{children}</InputContainer>
            <SliderContainer>
            </SliderContainer>
        </BaseLayoutElement>
    )
};

export default BaseLayout;