import React from 'react';
import { type Props } from './model';

function Heading(props: Props) {
  const {
    children, className, text, variant = 'h6', ...restProps
  } = props;

  const content = children || text;

  if (variant === 'h1') {
    return <h1 {...restProps} className={className}>{content}</h1>;
  }

  if (variant === 'h2') {
    return <h2 {...restProps} className={className}>{content}</h2>;
  }

  if (variant === 'h3') {
    return <h3 {...restProps} className={className}>{content}</h3>;
  }

  if (variant === 'h4') {
    return <h4 {...restProps} className={className}>{content}</h4>;
  }

  if (variant === 'h5') {
    return <h5 {...restProps} className={className}>{content}</h5>;
  }

  return <h6 {...restProps} className={className}>{content}</h6>;
}

export default Heading;
