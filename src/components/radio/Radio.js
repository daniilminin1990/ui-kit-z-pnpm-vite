import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { clsx } from 'clsx';
import s from './Radio.module.scss';
export const Root = forwardRef(({ className, ...rest }, ref) => {
    const classNames = {
        root: clsx(s.root, className)
    };
    return _jsx(RadioGroup.Root, { className: classNames.root, ref: ref, ...rest });
});
export const Item = forwardRef(({ children, className, disabled, value, ...rest }, ref) => {
    const classNames = {
        indicator: clsx(s.indicator, className),
        item: clsx(s.item, disabled && s.disabled, className),
        label: clsx(s.label, disabled && s.disabled, className)
    };
    return (_jsxs("label", { className: classNames.label, children: [_jsx(RadioGroup.Item, { className: classNames.item, disabled: disabled, ref: ref, value: value, ...rest, children: _jsx(RadioGroup.Indicator, { className: classNames.indicator, ...rest, ref: ref }) }), children] }));
});
export const Radio = {
    Item,
    Root
};
