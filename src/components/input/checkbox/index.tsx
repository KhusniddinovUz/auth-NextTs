import React from "react";
import styled from "styled-components";
import {color} from "@/config/theme";

const Checkbox = () => {
    const CheckboxInput = styled.input`
      accent-color: ${color.primary};
      width: 20px;
      height: 20px;
      border: 2px solid #8098F9 !important;
      background: ${color.backgroundLight};
      border-radius: 3px;
    `
    return(
        <CheckboxInput type={"checkbox"}/>
    )

};

export default Checkbox;