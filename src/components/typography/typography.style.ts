import styled,{css} from "styled-components";
import {color} from "@/config/theme";
import {TypographyProps} from "@/components/typography/index";

const size = {
    title:css`
      font-size: 40px;
    `,
    subTitle:css`
      font-size: 20px;
    `,
    paragraph:css`
      font-size: 16px;
    `
}

export const weight = {
    w_800: 800,
    w_700: 700,
    w_600: 600,
    w_500: 500,
    w_400: 400,
};

export const Text = styled.p<TypographyProps>`
  text-align: ${props => props.$align};
  color: ${props => color[props.color]};
  ${(props) => size[props.$textSize]};
  font-weight: ${props => weight[props.$textWeight]};
`;