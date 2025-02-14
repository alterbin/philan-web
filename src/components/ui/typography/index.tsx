import Heading from "./heading";
import { FontWeight, type Props } from "./model";
import useClassName from "./useClassName";

const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];

const fontWeightMap: Record<FontWeight, string> = {
  lt: "300",
  rg: "400",
  md: "500",
  sb: "600",
  bd: "700",
};

const useStyle = ({ style, fontFamily = "poppins", fontWeight }: Props) => {
  const fontMap: Record<string, string> = {
    poppins: "var(--font-poppins), sans-serif",
    inter: "var(--font-inter), sans-serif",
  };

  return {
    ...(style || {}),
    fontFamily: fontMap[fontFamily] || fontMap.poppins,
    fontWeight: fontWeight ? fontWeightMap[fontWeight] : "400",
  } as Props["style"];
};

function Text(props: Props) {
  const {
    children,
    color,
    className = "",
    fontFamily = "var(--font-poppins)",
    fontWeight = "rg",
    text,
    variant = "p",
    ...restProps
  } = props;

  const classes = useClassName({
    children,
    color,
    fontWeight,
    text,
    variant,
  });

  const style = useStyle({ fontFamily: "poppins", fontWeight, ...props });

  const content = children || text;

  if (headings.includes(variant)) {
    return (
      <Heading {...props} style={style} className={`${classes} ${className}`} />
    );
  }
  if (variant === "p") {
    return (
      <p {...restProps} style={style} className={`${classes} ${className}`}>
        {content}
      </p>
    );
  }

  return (
    <span {...restProps} style={style} className={`${classes} ${className}`}>
      {content}
    </span>
  );
}

export default function Typography({ tooltip, ...props }: Props) {
  if (tooltip) {
    const content = props.children || props.text;

    return (
      <Text
        {...props}
        className={`${props.className || ""} custom-target-icon `}
        data-pr-tooltip={String(content)}
        data-pr-position="bottom"
      />
    );
  }

  return <Text {...props} />;
}
