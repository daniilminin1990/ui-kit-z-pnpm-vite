import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId } from 'react';
import CheckIcon from '../../core/assets/svgComponents/CheckboxIcon';
import * as CheckboxRadix from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import s from './Checkbox.module.scss';
export const Checkbox = forwardRef((props, ref) => {
    const { checked, className, disabled, error, id, label, onCheckedChange, ...rest } = props;
    const generatedId = useId();
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onCheckedChange?.(!checked);
        }
    };
    const classNames = {
        indicator: clsx(s.CheckboxIndicator, {
            [s.checked]: checked,
            [s.disabled]: disabled
        }),
        label: clsx(s.Label, { [s.disabled]: disabled }, className),
        root: clsx(s.CheckboxRoot, {
            [s.checked]: checked,
            [s.disabled]: disabled
        }, className)
    };
    return (_jsxs("div", { className: s.CheckboxContainer, children: [_jsx(CheckboxRadix.Root, { ...rest, checked: checked, className: classNames.root, id: id ?? generatedId, onCheckedChange: onCheckedChange, onKeyDown: handleKeyDown, ref: ref, children: checked && (_jsx(CheckboxRadix.Indicator, { className: classNames.indicator, asChild: true, children: _jsx(CheckIcon, {}) })) }), _jsx("label", { className: classNames.label, htmlFor: id ?? generatedId, children: label })] }));
});
