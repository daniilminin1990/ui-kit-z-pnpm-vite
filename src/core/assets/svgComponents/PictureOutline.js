import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, memo } from 'react';
const SvgPictureOutline = (props, ref) => (_jsxs("svg", { fill: 'none', height: '1em', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, viewBox: '0 0 24 24', width: '1em', ...props, children: [_jsx("path", { d: 'M5 3 H19 A2 2 0 0 1 21 5 V19 A2 2 0 0 1 19 21 H5 A2 2 0 0 1 3 19 V5 A2 2 0 0 1 5 3 z' }), _jsx("path", { d: 'M11 9 A2 2 0 0 1 9 11 A2 2 0 0 1 7 9 A2 2 0 0 1 11 9 z' }), _jsx("path", { d: 'M21 15l-3.086-3.086a2 2 0 00-2.828 0L6 21' })] }));
const ForwardRef = forwardRef(SvgPictureOutline);
const Memo = memo(ForwardRef);
export default Memo;
