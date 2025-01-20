import { type IProps } from './model';

export default function useClassName(props: IProps) {
  let className = 'typography mb-0 ';

  if (props.align) className += ` text-${props.align} `;

  if (props.color) className += ` ${props.color} `;

  return className + [`typography--${props.fontWeight}`, ` typography--${props.variant || 'p'}`].join(' ');
}
