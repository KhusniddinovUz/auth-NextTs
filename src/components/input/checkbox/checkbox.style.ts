import styled from "styled-components";
import {color} from "@/config/theme";

export const CheckboxLabel = styled.label`
  position: relative;
  cursor: pointer;
  font-size: 16px;
  width: 20px;
  height: 20px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 2px solid ${color.primary};
  border-radius: 3px;
`;

export const StyledCheckbox = styled(Checkmark)`
  &:hover {
    background-color: #fff;
  }

  ${HiddenCheckbox}:checked ~ & {
    background-color: ${color.primary}; /* Change this to the checked checkbox color */
  }
`;
interface CheckmarkAfterProps{
    readonly checked:boolean;
}
export const CheckmarkAfter = styled.span<CheckmarkAfterProps>`
  content: ${props => (props.checked ? '2714' : '')};
  font-size: 16px;
  color: #fff;
  display: ${props => (props.checked ? 'block' : 'none')};
  position: absolute;
  top: -2px;
  left: 3px;
`;