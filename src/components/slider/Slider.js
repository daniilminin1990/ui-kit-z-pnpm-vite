import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef } from 'react';
import * as RadixSlider from '@radix-ui/react-slider';
import { clsx } from 'clsx';
import s from './Slider.module.scss';
import { Typography } from '../typography/Typography';
export const Slider = forwardRef((props, ref) => {
    const { className, label, rangeClassName, rangeStyle, sliderContainerClassName, sliderContainerStyle, thumbClassName, thumbStyle, trackClassName, trackStyle, value, valueWrapperClassName, ...rest } = props;
    const classNames = {
        range: clsx(s.range, rangeClassName),
        root: clsx(s.root, className),
        sliderContainer: clsx(s.sliderContainer, sliderContainerClassName),
        thumb: clsx(s.thumb, thumbClassName),
        track: clsx(s.track, trackClassName),
        valueWrapper: clsx(s.valueWrapper, valueWrapperClassName)
    };
    return (_jsxs(_Fragment, { children: [label && _jsx(Typography, { as: 'label', children: label }), _jsxs("div", { className: classNames.sliderContainer, children: [_jsx(Typography, { as: 'div', className: classNames.valueWrapper, children: value?.[0] }), _jsxs(RadixSlider.Root, { className: classNames.root, defaultValue: [value?.[0] ?? 0], max: 100, ref: ref, ...rest, children: [_jsx(RadixSlider.Track, { className: classNames.track, children: _jsx(RadixSlider.Range, { className: classNames.range }) }), _jsx(RadixSlider.Thumb, { "aria-label": 'valueMin', className: classNames.thumb }), _jsx(RadixSlider.Thumb, { "aria-label": 'valueMax', className: classNames.thumb })] }), value?.[1] && (_jsx(Typography, { as: 'div', className: classNames.valueWrapper, children: value?.[1] }))] })] }));
});
