import React, { useState } from 'react';
import {CheckboxLabel, HiddenCheckbox,StyledCheckbox, CheckmarkAfter} from "@/components/input/checkbox/checkbox.style";


const CustomCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <CheckboxLabel>
            <HiddenCheckbox checked={isChecked} onChange={handleCheckboxChange} />
            <StyledCheckbox />
            <CheckmarkAfter checked={isChecked}>&#10004;</CheckmarkAfter>
        </CheckboxLabel>
    );
};

export default CustomCheckbox;
