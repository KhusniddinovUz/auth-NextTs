import React from "react";
import {
  BaseLayoutElement,
  SliderContainer,
  InputContainer,
} from "./base-layout.style";
import SliderSection from "@/section/slider";

interface JSXElement {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: JSXElement) => {
  return (
    <BaseLayoutElement>
      <InputContainer>{children}</InputContainer>
      <SliderContainer>
        <SliderSection />
      </SliderContainer>
    </BaseLayoutElement>
  );
};

export default BaseLayout;
