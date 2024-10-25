import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, memo } from 'react';
const SvgPlusCircle = (props, ref) => (_jsxs("svg", { fill: 'none', height: '1em', ref: ref, viewBox: '0 0 24 24', width: '1em', xmlns: 'http://www.w3.org/2000/svg', ...props, children: [_jsx("g", { clipPath: 'url(#plus-circle_svg__a)', children: _jsx("path", { d: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m3 11h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2', fill: 'currentcolor' }) }), _jsx("defs", { children: _jsx("clipPath", { id: 'plus-circle_svg__a', children: _jsx("path", { d: 'M0 0h24v24H0z', fill: 'currentcolor' }) }) })] }));
const ForwardRef = forwardRef(SvgPlusCircle);
const Memo = memo(ForwardRef);
export default Memo;
