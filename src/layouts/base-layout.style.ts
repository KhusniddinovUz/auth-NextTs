import styled from "styled-components";
import { color } from "@/config/theme";

export const BaseLayoutElement = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  @media screen and (max-width: 900px) {
    display: block;
  }
`;

export const InputContainer = styled.div`
  background: ${color.backgroundLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 100vh;

  @media screen and (max-width: 900px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const SliderContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background: ${color.backgroundDark};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
