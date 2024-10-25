import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, memo } from 'react';
const SvgComponent = (props, ref) => (_jsx("svg", { fill: 'currentColor', height: '100%', ref: ref, viewBox: '0 0 32 32', width: '100%', xmlns: 'http://www.w3.org/2000/svg', ...props, children: _jsx("path", { d: 'M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z' }) }));
const ForwardRef = forwardRef(SvgComponent);
export default memo(ForwardRef);
