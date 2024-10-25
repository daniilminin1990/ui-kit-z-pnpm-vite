import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, memo } from 'react';
const SvgImageOutline = (props, ref) => (_jsxs("svg", { fill: 'none', height: '1em', ref: ref, viewBox: '0 0 24 24', width: '1em', xmlns: 'http://www.w3.org/2000/svg', ...props, children: [_jsxs("g", { clipPath: 'url(#image-outline_svg__a)', fill: 'currentcolor', children: [_jsx("path", { d: 'M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M6 5h12a1 1 0 0 1 1 1v8.36l-3.2-2.73a2.77 2.77 0 0 0-3.52 0L5 17.7V6a1 1 0 0 1 1-1m12 14H6.56l7-5.84a.78.78 0 0 1 .93 0L19 17v1a1 1 0 0 1-1 1' }), _jsx("path", { d: 'M8 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3' })] }), _jsx("defs", { children: _jsx("clipPath", { id: 'image-outline_svg__a', children: _jsx("path", { d: 'M0 0h24v24H0z', fill: 'currentcolor' }) }) })] }));
const ForwardRef = forwardRef(SvgImageOutline);
const Memo = memo(ForwardRef);
export default Memo;
