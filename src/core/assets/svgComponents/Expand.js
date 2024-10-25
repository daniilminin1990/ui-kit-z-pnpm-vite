import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, memo } from 'react';
const SvgExpand = (props, ref) => (_jsxs("svg", { fill: 'none', height: '1em', ref: ref, viewBox: '0 0 24 24', width: '1em', xmlns: 'http://www.w3.org/2000/svg', ...props, children: [_jsx("g", { clipPath: 'url(#expand_svg__a)', fill: 'currentcolor', children: _jsx("path", { d: 'M20 5a1 1 0 0 0-1-1h-5a1 1 0 1 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219L18 7.42V10a1 1 0 0 0 2 0zM10.71 13.29a1 1 0 0 0-1.42 0L6 16.57V14a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H7.42l3.29-3.29a1 1 0 0 0 0-1.42' }) }), _jsx("defs", { children: _jsx("clipPath", { id: 'expand_svg__a', children: _jsx("path", { d: 'M0 0h24v24H0z', fill: 'currentcolor' }) }) })] }));
const ForwardRef = forwardRef(SvgExpand);
const Memo = memo(ForwardRef);
export default Memo;
