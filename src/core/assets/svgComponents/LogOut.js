import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, memo } from 'react';
const SvgLogOut = (props, ref) => (_jsxs("svg", { fill: 'none', height: '1em', ref: ref, viewBox: '0 0 24 24', width: '1em', xmlns: 'http://www.w3.org/2000/svg', ...props, children: [_jsx("g", { clipPath: 'url(#log-out_svg__a)', fill: 'currentcolor', children: _jsx("path", { d: 'M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6zM20.82 11.42l-2.82-4a1 1 0 1 0-1.63 1.16L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 1.6 1.2l3-4a1 1 0 0 0 .02-1.18' }) }), _jsx("defs", { children: _jsx("clipPath", { id: 'log-out_svg__a', children: _jsx("path", { d: 'M0 0h24v24H0z', fill: 'currentcolor' }) }) })] }));
const ForwardRef = forwardRef(SvgLogOut);
const Memo = memo(ForwardRef);
export default Memo;
