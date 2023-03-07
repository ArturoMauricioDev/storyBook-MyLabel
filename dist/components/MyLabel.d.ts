/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
    /**
     * Label contents
     */
    label: string;
    /**
     * How large should the label be?
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * What type of color to use?
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * All caps want to see? ?
     */
    allCaps?: boolean;
    /**
     * What font color to use?
     */
    fontColor?: string;
    /**
     * What background color to use?
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
