import Heading from './heading';
import { FontWeight, type Props } from './model';
import useClassName from './useClassName';

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const fontWeightMap: Record<FontWeight, string> = {
  lt: 'Light',
  rg: 'Regular',
  md: 'Medium',
  sb: 'Semibold',
  bd: 'Bold',
};

const useStyle = ({ style, fontFamily, fontWeight }: Props) => {
  if (fontWeight) {
    return { ...(style || {}), fontFamily: `${fontFamily}-${fontWeightMap[fontWeight]}` } as Props['style'];
  }

  return style;
};

function Text(props: Props) {
  const {
    children, color, className = '', fontFamily = 'GeneralSans', fontWeight = 'rg', text, variant = 'p', ...restProps
  } = props;

  const classes = useClassName({
    children, color, fontWeight, text, variant,
  });

  const style = useStyle({ fontFamily, fontWeight, ...props });

  const content = children || text;

  if (headings.includes(variant)) {
    return <Heading {...props} style={style} className={`${classes} ${className}`} />;
  } if (variant === 'p') {
    return <p {...restProps} style={style} className={`${classes} ${className}`}>{content}</p>;
  }

  return <span {...restProps} style={style} className={`${classes} ${className}`}>{content}</span>;
}

export default function Typography({ tooltip, ...props }: Props) {
  if (tooltip) {
    const content = props.children || props.text;

    return (
      <Text
        {...props}
        className={`${props.className || ''} custom-target-icon `}
        data-pr-tooltip={String(content)}
        data-pr-position="bottom"
      />
    );
  }

  return <Text {...props} />;
}
