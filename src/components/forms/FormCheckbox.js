import { jsx as _jsx } from "react/jsx-runtime";
import { useController } from 'react-hook-form';
import { Checkbox } from '../checkbox';
export const FormCheckbox = ({ control, name, ...rest }) => {
    const { field: { onChange, value = rest.defaultChecked, ...field }, fieldState: { error } } = useController({
        control,
        name
    });
    return _jsx(Checkbox, { ...rest, ...field, checked: value, error: error?.message, onCheckedChange: onChange });
};
