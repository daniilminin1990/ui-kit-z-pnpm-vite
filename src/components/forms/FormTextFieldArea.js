import { jsx as _jsx } from "react/jsx-runtime";
import { useController } from 'react-hook-form';
import { TextArea } from '../textArea';
export const FormTextfieldArea = ({ control, name, ...rest }) => {
    const { field, fieldState: { error } } = useController({
        control,
        name
    });
    return _jsx(TextArea, { ...rest, ...field, resize: rest.resize });
};
