export interface ChartData {
    [key: string]: number | string;
    name: string;
}
interface ChartProps<T extends ChartData> {
    data: T[];
    dataKeys: Record<string, string>;
}
export declare const Chart: <T extends ChartData>({ data, dataKeys }: ChartProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
