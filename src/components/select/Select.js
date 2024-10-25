import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowIosDownOutline } from '../../core/assets/svgComponents';
import { Typography } from '../typography/Typography';
import * as Select from '@radix-ui/react-select';
import clsx from 'clsx';
import s from './Select.module.scss';
export const SelectUI = ({ className, disabled, name, onValueChange, selectOptions, value }) => {
    const selectClasses = {
        button: clsx(s.button, s.className),
        content: clsx(s.selectContent),
        icon: clsx(s.selectIcon, className && s.className),
        root: clsx(s.selectRoot),
        selectItem: clsx(s.selectItem, s.className),
        trigger: clsx(s.selectTrigger, disabled && s.selectTriggerDisabled, className),
        viewport: clsx(s.selectViewport)
    };
    const selectedOption = selectOptions.find((el) => el.value === value);
    return (_jsx("div", { className: selectClasses.root, children: _jsxs(Select.Root, { disabled: disabled, name: name, onValueChange: onValueChange, children: [_jsx(Select.Trigger, { "aria-label": 'select', className: selectClasses.trigger, asChild: true, children: _jsxs("button", { children: [_jsx(Typography, { className: s.selectVariant, variant: 'regular_text_14', children: selectedOption ? selectedOption.text : 'Select an option' }), _jsx(ArrowIosDownOutline, { className: selectClasses.icon })] }) }), _jsx(Select.Portal, { children: _jsx(Select.Content, { className: selectClasses.content, position: 'popper', children: _jsx(Select.Viewport, { className: selectClasses.viewport, children: selectOptions.map((option) => (_jsx(Select.Item, { className: selectClasses.selectItem, value: option.value, children: _jsx(Select.ItemText, { className: s.selectText, children: _jsx(Typography, { variant: 'regular_text_14', children: option.text }) }) }, option.value))) }) }) })] }) }));
};
