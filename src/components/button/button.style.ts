import styled from "styled-components";
import { color } from "@/config/theme";

export interface ButtonMainProps {
  readonly color: "primary" | "text" | "white";
  readonly $backgroundcolor: "primary" | "white";
}

export const ButtonMain = styled.button<ButtonMainProps>`
  color: ${(props) => color[props.color]};
  background-color: ${(props) => color[props.$backgroundcolor]};
  border: 2px solid ${(props) => color[props.$backgroundcolor]};
  border-radius: 10px;
  padding: 15px 10px 15px 10px;
  font-weight: 700;
  text-align: center;
  width: 430px;
  cursor: pointer;
  margin-bottom: 20px;
  margin-top: 25px;
  @media screen and (max-width: 500px) {
    width: 80%;
  }

  @media screen and (min-width: 500px) and (max-width: 900px) {
    width: 400px;
  }

  @media screen and (min-width: 900px) and (max-width: 1200px) {
    width: 350px;
  }
`;
