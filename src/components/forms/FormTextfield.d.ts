import { FieldValues, UseControllerProps } from 'react-hook-form';
import { InputProps } from '../input';
export type ControlledInputProps<TFieldValues extends FieldValues> = {
    className?: string;
} & {
    currentValue?: TFieldValues[Extract<keyof TFieldValues, string>];
} & Omit<InputProps, 'onChange' | 'value'> & Omit<UseControllerProps<TFieldValues>, 'defaultValue' | 'disabled' | 'rules'>;
export declare const FormTextfield: <TFieldValues extends FieldValues>({ control, name, ...rest }: ControlledInputProps<TFieldValues>) => import("react/jsx-runtime").JSX.Element;
