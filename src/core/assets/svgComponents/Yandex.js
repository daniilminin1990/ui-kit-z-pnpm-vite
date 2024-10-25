import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, memo } from 'react';
const SvgYandex = (props, ref) => (_jsxs("svg", { fill: 'none', height: '1em', ref: ref, viewBox: '0 0 36 36', width: '1em', xmlns: 'http://www.w3.org/2000/svg', ...props, children: [_jsxs("g", { clipPath: 'url(#Yandex_svg__a)', children: [_jsx("path", { d: 'M18 35c9.389 0 17-7.611 17-17S27.389 1 18 1 1 8.611 1 18s7.611 17 17 17Z', stroke: 'currentcolor', strokeWidth: 2 }), _jsx("path", { d: 'm9.638 7.13-3.182 3.182 9.3 9.301V30.67h4.5V19.6l9.289-9.289-3.182-3.181L18 15.494z', fill: 'currentcolor' })] }), _jsx("defs", { children: _jsx("clipPath", { id: 'Yandex_svg__a', children: _jsx("path", { d: 'M0 0h36v36H0z', fill: 'currentcolor' }) }) })] }));
const ForwardRef = forwardRef(SvgYandex);
const Memo = memo(ForwardRef);
export default Memo;
