import React from "react";
import {Text} from "@/components/typography/typography.style";

type FontSize = "title" | "subTitle" | "paragraph" ;
type FontWeight = "w_800" | "w_700" | "w_600" | "w_500" | "w_400";
type TextColor = "primary" | "white" | "black" | "text";
type Align = "center" | "left" | "right";



export interface TypographyProps extends React.HtmlHTMLAttributes<any>{
    readonly $textSize: FontSize;
    readonly $textWeight: FontWeight;
    readonly children:React.ReactNode;
    readonly color:TextColor;
    readonly tag?:any;
    readonly $align?: Align;
}

const Typography = ({tag, children, ...props}:TypographyProps)=> {
    return(
        <Text as={tag} {...props}>
            {children}
        </Text>
    )
};

export default Typography;