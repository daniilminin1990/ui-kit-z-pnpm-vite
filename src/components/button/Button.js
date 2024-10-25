import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { clsx } from 'clsx';
import s from './Button.module.scss';
export const ButtonPolymorph = (props, ref) => {
    const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props;
    return _jsx(Component, { className: clsx(s.button, s[variant], fullWidth && s.fullWidth, className), ref: ref, ...rest });
};
export const Button = forwardRef(ButtonPolymorph);
