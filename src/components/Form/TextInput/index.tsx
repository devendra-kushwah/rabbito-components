"use client";
import React from 'react';
import { Input } from 'antd';
import type { InputProps, InputRef } from 'antd';

export type TextInputProps = InputProps & {
  /** Optional wrapper class name around the input */
  wrapperClassName?: string;
  /** Optional label shown above the input */
  label?: React.ReactNode;
  /** If true, renders the label (default true) */
  showLabel?: boolean;
};

type CompoundedComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<TextInputProps> & React.RefAttributes<HTMLInputElement>
> & {
  TextArea: typeof Input.TextArea;
  Search: typeof Input.Search;
  Password: typeof Input.Password;
};

const TextInput = React.forwardRef<InputRef, TextInputProps>(
  ({ wrapperClassName, label, showLabel = true, ...props }, ref) => {
    return (
      <div className={wrapperClassName}>
        {showLabel && label ? <label style={{ display: 'block', marginBottom: 6 }}>{label}</label> : null}
        <Input ref={ref} {...props} />
      </div>
    );
  },
) as CompoundedComponent;

TextInput.TextArea = Input.TextArea;
TextInput.Search = Input.Search;
TextInput.Password = Input.Password;

export default TextInput;
