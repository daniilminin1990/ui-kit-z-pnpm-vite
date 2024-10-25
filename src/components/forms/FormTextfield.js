import { jsx as _jsx } from "react/jsx-runtime";
import { useController } from 'react-hook-form';
import { Input } from '../input';
export const FormTextfield = ({ control, name, ...rest }) => {
    const { field, fieldState: { error } } = useController({
        control,
        defaultValue: rest.currentValue,
        disabled: rest.disabled,
        name,
        shouldUnregister: true
    });
    return _jsx(Input, { ...rest, ...field, error: error?.message });
};
