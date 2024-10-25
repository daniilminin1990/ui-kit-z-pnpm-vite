import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, memo } from 'react';
const SvgTrash = (props, ref) => (_jsxs("svg", { fill: 'none', height: '1em', ref: ref, viewBox: '0 0 24 24', width: '1em', xmlns: 'http://www.w3.org/2000/svg', ...props, children: [_jsx("g", { clipPath: 'url(#trash_svg__a)', children: _jsx("path", { d: 'M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 1 0 0-2M10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4z', fill: 'currentcolor' }) }), _jsx("defs", { children: _jsx("clipPath", { id: 'trash_svg__a', children: _jsx("path", { d: 'M0 0h24v24H0z', fill: 'currentcolor' }) }) })] }));
const ForwardRef = forwardRef(SvgTrash);
const Memo = memo(ForwardRef);
export default Memo;
