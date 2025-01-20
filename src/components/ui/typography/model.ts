import { type ReactNode } from 'react';
import type React from 'react';
import { type Color } from '../../../utils/colors';

type Align = 'center' | 'inherit' | 'justify' | 'left' | 'right';

export type FontWeight = 'lt' | 'rg' | 'md' | 'sb' | 'bd';
// lt - 300 | bd - 700

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'P-LG' | 'P-MD' | 'P-SM' | 'P-XS' | 'P-XXS' | 'btn-lg' | 'btn-sm' | 'btn-xs';

interface IHeadingProps extends React.HTMLProps<HTMLHeadingElement> {}

interface IParagraphProps extends React.HTMLProps<HTMLParagraphElement> {}

export interface IProps {
  align?: Align
  children?: ReactNode
  color?: keyof Color
  fontFamily?: 'GeneralSans' | 'TrenchSlab'
  fontWeight?: FontWeight
  text?: string
  tooltip?: string | boolean
  variant?: Variant
}

export type Props = IProps & (IHeadingProps | IParagraphProps)
