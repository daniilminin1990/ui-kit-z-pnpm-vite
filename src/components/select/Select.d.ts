export interface SelectOptionsType {
    text: string;
    value: string;
}
interface Props {
    className?: string;
    disabled?: boolean;
    name?: string;
    onValueChange?: (items: string) => void;
    selectOptions: SelectOptionsType[];
    value?: string;
}
export declare const SelectUI: ({ className, disabled, name, onValueChange, selectOptions, value }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
