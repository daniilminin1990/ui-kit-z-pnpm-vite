import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, memo } from 'react';
const SvgPinOutline = (props, ref) => (_jsxs("svg", { fill: 'none', height: '1em', ref: ref, viewBox: '0 0 24 24', width: '1em', xmlns: 'http://www.w3.org/2000/svg', ...props, children: [_jsxs("g", { clipPath: 'url(#pin-outline_svg__a)', fill: 'currentcolor', children: [_jsx("path", { d: 'M12 2a8 8 0 0 0-8 7.92c0 5.48 7.05 11.58 7.35 11.84a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 9.92A8 8 0 0 0 12 2m0 17.65c-1.67-1.59-6-6-6-9.73a6 6 0 1 1 12 0c0 3.7-4.33 8.14-6 9.73' }), _jsx("path", { d: 'M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3' })] }), _jsx("defs", { children: _jsx("clipPath", { id: 'pin-outline_svg__a', children: _jsx("path", { d: 'M0 0h24v24H0z', fill: 'currentcolor' }) }) })] }));
const ForwardRef = forwardRef(SvgPinOutline);
const Memo = memo(ForwardRef);
export default Memo;
