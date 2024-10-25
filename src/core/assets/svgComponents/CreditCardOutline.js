import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, memo } from 'react';
const SvgCreditCardOutline = (props, ref) => (_jsxs("svg", { fill: 'none', height: '1em', ref: ref, viewBox: '0 0 24 24', width: '1em', xmlns: 'http://www.w3.org/2000/svg', ...props, children: [_jsxs("g", { clipPath: 'url(#credit-card-outline_svg__a)', fill: 'currentcolor', children: [_jsx("path", { d: 'M19 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3M4 8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1H4zm16 8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5h16z' }), _jsx("path", { d: 'M7 15h4a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2M15 15h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2' })] }), _jsx("defs", { children: _jsx("clipPath", { id: 'credit-card-outline_svg__a', children: _jsx("path", { d: 'M0 0h24v24H0z', fill: 'currentcolor' }) }) })] }));
const ForwardRef = forwardRef(SvgCreditCardOutline);
const Memo = memo(ForwardRef);
export default Memo;
