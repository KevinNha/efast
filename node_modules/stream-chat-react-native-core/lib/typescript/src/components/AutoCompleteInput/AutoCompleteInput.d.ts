/// <reference types="react" />
import type { TextInputProps, TextInput as TextInputType } from 'react-native';
import type { DefaultCommandType, DefaultUserType, UnknownType } from '../../types/types';
import type { TriggerSettings } from '../../utils/utils';
export declare type AutoCompleteInputProps<Co extends string = DefaultCommandType, Us extends UnknownType = DefaultUserType> = {
    /**
     * Additional props for underlying TextInput component. These props will be forwarded as is to the TextInput component.
     *
     * @see See https://reactnative.dev/docs/textinput#reference
     */
    additionalTextInputProps: TextInputProps;
    /**
     * Handling text change events in the parent
     *
     * @param {string} text
     */
    onChange: (text: string) => void;
    /**
     * Ref callback to set reference on input box
     */
    setInputBoxRef: (ref: TextInputType | null) => void;
    /**
     * Mapping of input triggers to the outputs to be displayed by the AutoCompleteInput
     */
    triggerSettings: TriggerSettings<Co, Us>;
    /**
     * Text value of the TextInput
     */
    value: string;
};
export declare const AutoCompleteInput: <Co extends string = string & {}, Us extends Record<string, unknown> = DefaultUserType>(props: AutoCompleteInputProps<Co, Us>) => JSX.Element;
