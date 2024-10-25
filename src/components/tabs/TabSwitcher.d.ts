export interface Tab {
    disabled?: boolean;
    locale: string;
    text: string;
    value: string;
}
interface Props {
    className?: string;
    onValueChange: (value: string) => void;
    tabs: Tab[];
    value: string;
}
export declare const TabSwitcher: ({ className, onValueChange, tabs, value }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
