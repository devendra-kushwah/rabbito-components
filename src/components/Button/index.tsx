"use client";
import React from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';

export type ButtonColor = AntButtonProps['type'] | 'primary' | 'default';
// allow extension beyond the built-in variants (keeps typing flexible for consumers)
export type ButtonVariant = 'solid' | 'outline' | 'text' | (string & {});

export type ButtonProps = Omit<AntButtonProps, 'type'> & {
  /** color maps to AntD button type (primary, dashed, link, text, ghost, default) */
  color?: ButtonColor;
  /** visual variant */
  variant?: ButtonVariant;
};

const mapToAnt = (color: ButtonColor | undefined, variant: ButtonVariant | undefined) => {
  let type: AntButtonProps['type'] = 'default';
  let ghost = false;

  // choose base type from color
  if (color && color !== 'default') {
    type = color as AntButtonProps['type'];
  }

  // variant adjustments
  if (variant === 'outline') {
    // keep the type (primary/dashed/etc) but use ghost to simulate outline
    ghost = true;
    if (!color || color === 'default') type = 'default';
  } else if (variant === 'text') {
    type = 'text';
    ghost = false;
  } else {
    // solid: keep type as chosen
  }

  return { type, ghost } as Pick<AntButtonProps, 'type' | 'ghost'>;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { color = 'default', variant = 'solid', children, ...rest } = props;
  const ant = mapToAnt(color, variant);

  return (
    <AntButton ref={ref as any} {...ant} {...rest}>
      {children}
    </AntButton>
  );
});

Button.displayName = 'Button';

export default Button;
