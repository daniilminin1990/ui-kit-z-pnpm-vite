import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, memo } from 'react';
const SvgComponent = (props, ref) => (_jsxs("svg", { fill: 'none', height: 24, ref: ref, width: 24, xmlns: 'http://www.w3.org/2000/svg', ...props, children: [_jsx("circle", { cx: 12, cy: 12, fill: '#CC1439', r: 10, stroke: '#0D0D0D', strokeWidth: 4 }), _jsx("g", { clipPath: 'url(#a)', children: _jsx("path", { d: 'm12.94 12 2.867-2.86a.67.67 0 1 0-.947-.947L12 11.06 9.14 8.193a.67.67 0 0 0-.947.947L11.06 12l-2.867 2.86a.667.667 0 0 0 .217 1.092.668.668 0 0 0 .73-.146L12 12.94l2.86 2.867a.668.668 0 1 0 .947-.947L12.94 12Z', fill: '#fff' }) }), _jsx("defs", { children: _jsx("clipPath", { id: 'a', children: _jsx("path", { d: 'M4 4h16v16H4z', fill: '#fff' }) }) })] }));
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
