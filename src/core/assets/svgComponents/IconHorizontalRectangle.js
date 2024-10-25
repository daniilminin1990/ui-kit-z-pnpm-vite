import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, memo } from 'react';
const SvgIconHorizontalRectangle = (props, ref) => (_jsxs("svg", { fill: 'none', height: '24px', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, viewBox: '0 0 24 24', width: '24px', ...props, children: [_jsx("path", { d: 'M0 0h24v24H0z', stroke: 'none' }), _jsx("path", { d: 'M5 5 H19 A2 2 0 0 1 21 7 V17 A2 2 0 0 1 19 19 H5 A2 2 0 0 1 3 17 V7 A2 2 0 0 1 5 5 z' })] }));
const ForwardRef = forwardRef(SvgIconHorizontalRectangle);
const Memo = memo(ForwardRef);
export default Memo;
