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

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor,
  backgroundColor = "transparent",
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
