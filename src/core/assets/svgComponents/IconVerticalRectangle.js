import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, memo } from 'react';
const SvgIconVerticalRectangle = (props, ref) => (_jsx("svg", { fill: 'none', height: '24px', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, viewBox: '0 0 24 24', width: '24px', ...props, children: _jsx("path", { d: 'M8 2 H16 A2 2 0 0 1 18 4 V20 A2 2 0 0 1 16 22 H8 A2 2 0 0 1 6 20 V4 A2 2 0 0 1 8 2 z' }) }));
const ForwardRef = forwardRef(SvgIconVerticalRectangle);
const Memo = memo(ForwardRef);
export default Memo;
