import React from "react";
import {
  BaseLayoutElement,
  SliderContainer,
  InputContainer,
} from "./base-layout.style";
import SliderSection from "@/section/slider";

interface JSXElement {
  children: React.ReactNode;
  title: string;
  subTitle: string;
}

const BaseLayout = ({ children, title, subTitle }: JSXElement) => {
  return (
    <BaseLayoutElement>
      <InputContainer>{children}</InputContainer>
      <SliderContainer>
        <SliderSection title={title} subTitle={subTitle} />
      </SliderContainer>
    </BaseLayoutElement>
  );
};

export default BaseLayout;
