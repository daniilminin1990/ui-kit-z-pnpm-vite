import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import s from './Chart.module.scss';
export const Chart = ({ data, dataKeys }) => {
    return (_jsx("div", { className: s.chart, children: _jsx(ResponsiveContainer, { height: 400, width: '100%', children: _jsxs(LineChart, { data: data, children: [_jsx(XAxis, { dataKey: 'name' }), _jsx(YAxis, {}), _jsx(Tooltip, {}), Object.keys(dataKeys).map((key) => (_jsx(Line, { dataKey: key, stroke: dataKeys[key], type: 'monotone' }, key)))] }) }) }));
};
