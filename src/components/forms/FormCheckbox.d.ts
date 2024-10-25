import { FieldValues, UseControllerProps } from 'react-hook-form';
import { CheckboxPropsProps } from '../checkbox';
type Props<T extends FieldValues> = Omit<CheckboxPropsProps, 'checked' | 'name' | 'onBlur' | 'onCheckedChange'> & UseControllerProps<T>;
export declare const FormCheckbox: <T extends FieldValues>({ control, name, ...rest }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
