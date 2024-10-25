import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, memo } from 'react';
const SvgCheckmarkOutline = (props, ref) => (_jsxs("svg", { fill: 'none', height: '1em', ref: ref, viewBox: '0 0 24 24', width: '1em', xmlns: 'http://www.w3.org/2000/svg', ...props, children: [_jsx("g", { clipPath: 'url(#checkmark-outline_svg__a)', children: _jsx("path", { d: 'M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1.001 1.001 0 0 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z', fill: 'currentcolor' }) }), _jsx("defs", { children: _jsx("clipPath", { id: 'checkmark-outline_svg__a', children: _jsx("path", { d: 'M0 0h24v24H0z', fill: 'currentcolor' }) }) })] }));
const ForwardRef = forwardRef(SvgCheckmarkOutline);
const Memo = memo(ForwardRef);
export default Memo;
