import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, memo } from 'react';
const SvgBlock = (props, ref) => (_jsxs("svg", { fill: 'none', height: '1em', ref: ref, viewBox: '0 0 24 24', width: '1em', xmlns: 'http://www.w3.org/2000/svg', ...props, children: [_jsxs("g", { clipPath: 'url(#block_svg__a)', children: [_jsx("path", { d: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20', fill: 'currentcolor' }), _jsx("path", { d: 'm7.043 19.362 10-15', stroke: 'currentcolor', strokeWidth: 2.3 })] }), _jsx("defs", { children: _jsx("clipPath", { id: 'block_svg__a', children: _jsx("path", { d: 'M0 0h24v24H0z', fill: 'currentcolor' }) }) })] }));
const ForwardRef = forwardRef(SvgBlock);
const Memo = memo(ForwardRef);
export default Memo;
