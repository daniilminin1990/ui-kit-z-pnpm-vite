import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import s from './Typography.module.scss';
const defaultElement = 'div';
const TypographyBasic = ({ as, children, className, variant = 'regular_text_16', ...otherProps }) => {
    const classNames = `${className} ${s[variant]}`;
    const Component = as || 'p';
    return (_jsx(Component, { className: classNames, ...otherProps, children: children }));
};
export const Typography = memo(TypographyBasic);
