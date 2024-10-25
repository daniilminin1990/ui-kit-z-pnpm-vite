import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, memo } from 'react';
const SvgPlusCircleOutline = (props, ref) => (_jsxs("svg", { fill: 'none', height: '1em', ref: ref, viewBox: '0 0 24 24', width: '1em', xmlns: 'http://www.w3.org/2000/svg', ...props, children: [_jsxs("g", { clipPath: 'url(#plus-circle-outline_svg__a)', fill: 'currentcolor', children: [_jsx("path", { d: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20' }), _jsx("path", { d: 'M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2' })] }), _jsx("defs", { children: _jsx("clipPath", { id: 'plus-circle-outline_svg__a', children: _jsx("path", { d: 'M0 0h24v24H0z', fill: 'currentcolor' }) }) })] }));
const ForwardRef = forwardRef(SvgPlusCircleOutline);
const Memo = memo(ForwardRef);
export default Memo;