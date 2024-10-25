import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, memo } from 'react';
const SvgPerson = (props, ref) => (_jsxs("svg", { fill: 'none', height: '1em', ref: ref, viewBox: '0 0 24 24', width: '1em', xmlns: 'http://www.w3.org/2000/svg', ...props, children: [_jsx("g", { clipPath: 'url(#person_svg__a)', fill: 'currentcolor', children: _jsx("path", { d: 'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M18 21a1 1 0 0 0 1-1 7 7 0 1 0-14 0 1 1 0 0 0 1 1z' }) }), _jsx("defs", { children: _jsx("clipPath", { id: 'person_svg__a', children: _jsx("path", { d: 'M0 0h24v24H0z', fill: 'currentcolor' }) }) })] }));
const ForwardRef = forwardRef(SvgPerson);
const Memo = memo(ForwardRef);
export default Memo;
