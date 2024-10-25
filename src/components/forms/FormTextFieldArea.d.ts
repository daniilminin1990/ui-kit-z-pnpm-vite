import { FieldValues, UseControllerProps } from 'react-hook-form';
import { TextAreaProps } from '../textArea';
export type ControlledInputProps<TFieldValues extends FieldValues> = {
    className?: string;
    currentValue?: string;
    resize?: boolean;
} & {
    currentValue?: TFieldValues[Extract<keyof TFieldValues, string>];
} & Omit<TextAreaProps, 'onChange' | 'value'> & Omit<UseControllerProps<TFieldValues>, 'defaultValue' | 'disabled' | 'rules'>;
export declare const FormTextfieldArea: <TFieldValues extends FieldValues>({ control, name, ...rest }: ControlledInputProps<TFieldValues>) => import("react/jsx-runtime").JSX.Element;
