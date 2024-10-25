import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, memo } from 'react';
const SvgPersonAddOutline = (props, ref) => (_jsxs("svg", { fill: 'none', height: '1em', ref: ref, viewBox: '0 0 24 24', width: '1em', xmlns: 'http://www.w3.org/2000/svg', ...props, children: [_jsx("g", { clipPath: 'url(#person-add-outline_svg__a)', fill: 'currentcolor', children: _jsx("path", { d: 'M21 6h-1V5a1 1 0 0 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 0 0 2 0V8h1a1 1 0 1 0 0-2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4M10 13a7 7 0 0 0-7 7 1 1 0 1 0 2 0 5 5 0 1 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7' }) }), _jsx("defs", { children: _jsx("clipPath", { id: 'person-add-outline_svg__a', children: _jsx("path", { d: 'M0 0h24v24H0z', fill: 'currentcolor' }) }) })] }));
const ForwardRef = forwardRef(SvgPersonAddOutline);
const Memo = memo(ForwardRef);
export default Memo;
