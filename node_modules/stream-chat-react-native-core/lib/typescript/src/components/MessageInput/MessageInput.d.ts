import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { SendFileAPIResponse, Message as StreamMessage, UserResponse } from 'stream-chat';
import { ActionSheetProps, ActionSheetStyles } from './ActionSheetAttachment';
import { AttachButtonProps } from './AttachButton';
import { FileUploadPreviewProps } from './FileUploadPreview';
import { ImageUploadPreviewProps } from './ImageUploadPreview';
import { SendButtonProps } from './SendButton';
import { AutoCompleteInputProps } from '../AutoCompleteInput/AutoCompleteInput';
import { ChannelContextValue } from '../../contexts/channelContext/ChannelContext';
import type { FileIconProps } from '../Attachment/FileIcon';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type MessageInputProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    /**
     * Custom UI component for ActionSheetAttachment.
     *
     * Defaults to and accepts same props as: [ActionSheetAttachment](https://getstream.github.io/stream-chat-react-native/#actionsheetattachment)
     */
    ActionSheetAttachment?: React.ComponentType<ActionSheetProps>;
    /**
     * Style object for actionsheet (used for option to choose file attachment or photo attachment).
     * Supported styles: https://github.com/beefe/react-native-actionsheet/blob/master/lib/styles.js
     */
    actionSheetStyles?: ActionSheetStyles;
    /**
     * Additional props for underlying TextInput component. These props will be forwarded as it is to TextInput component.
     *
     * @see See https://reactnative.dev/docs/textinput#reference
     */
    additionalTextInputProps?: TextInputProps;
    /**
     * Custom UI component for attach button.
     *
     * Defaults to and accepts same props as: [AttachButton](https://getstream.github.io/stream-chat-react-native/#attachbutton)
     */
    AttachButton?: React.ComponentType<AttachButtonProps>;
    /**
     * Custom UI component for attachment icon for type 'file' attachment in preview.
     * Defaults to and accepts same props as: https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/Attachment/FileIcon.tsx
     */
    AttachmentFileIcon?: React.ComponentType<FileIconProps>;
    /**
     * Max number of suggestions to display in list. Defaults to 10.
     */
    autocompleteSuggestionsLimit?: number;
    /**
     * Compress image with quality (from 0 to 1, where 1 is best quality).
     * On iOS, values larger than 0.8 don't produce a noticeable quality increase in most images,
     * while a value of 0.8 will reduce the file size by about half or less compared to a value of 1.
     * Image picker defaults to 0.8 for iOS and 1 for Android
     */
    compressImageQuality?: number;
    /**
     * Override of context disabled for disabling input only
     */
    disabled?: boolean;
    /**
     * Override file upload request
     *
     * @param file    File object - { uri: '', name: '' }
     * @param channel Current channel object
     */
    doDocUploadRequest?: (file: {
        name: string;
        size?: string | number;
        type?: string;
        uri?: string;
    }, channel: ChannelContextValue<At, Ch, Co, Ev, Me, Re, Us>['channel']) => Promise<SendFileAPIResponse>;
    /**
     * Override image upload request
     *
     * @param file    File object - { uri: '' }
     * @param channel Current channel object
     */
    doImageUploadRequest?: (file: {
        name?: string;
        uri?: string;
    }, channel: ChannelContextValue<At, Ch, Co, Ev, Me, Re, Us>['channel']) => Promise<SendFileAPIResponse>;
    /**
     * Custom UI component for FileUploadPreview.
     * Defaults to and accepts same props as: https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/MessageInput/FileUploadPreview.tsx
     */
    FileUploadPreview?: React.ComponentType<FileUploadPreviewProps>;
    /** If component should have file picker functionality */
    hasFilePicker?: boolean;
    /** If component should have image picker functionality */
    hasImagePicker?: boolean;
    ImageUploadPreview?: React.ComponentType<ImageUploadPreviewProps>;
    /** Initial value to set on input */
    initialValue?: string;
    /**
     * Custom UI component for AutoCompleteInput.
     * Defaults to and accepts same props as: https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/AutoCompleteInput/AutoCompleteInput.tsx
     */
    Input?: React.ComponentType<AutoCompleteInputProps<Co, Us> & {
        _pickFile: () => Promise<void>;
        _pickImage: () => Promise<void>;
        _removeFile: FileUploadPreviewProps['removeFile'];
        _removeImage: ImageUploadPreviewProps['removeImage'];
        _uploadFile: FileUploadPreviewProps['retryUpload'];
        _uploadImage: ImageUploadPreviewProps['retryUpload'];
        appendText: (newText: string) => void;
        closeAttachActionSheet: () => void;
        disabled: boolean;
        getUsers: () => UserResponse<Us>[];
        handleOnPress: () => Promise<void>;
        isValidMessage: () => boolean;
        onSelectItem: (item: UserResponse<Us>) => void;
        sendMessage: () => Promise<void>;
        setInputBoxContainerRef: (ref: View | null) => void;
        updateMessage: () => Promise<void>;
        uploadNewFile: (file: {
            name: string;
            size?: number | string;
            type?: string;
            uri?: string;
        }) => Promise<void>;
        uploadNewImage: (image: {
            uri?: string;
        }) => Promise<void>;
    }>;
    /** Limit on allowed number of files to attach at a time. */
    maxNumberOfFiles?: number;
    /**
     * Callback that is called when the text input's text changes. Changed text is passed as a single string argument to the callback handler.
     *
     * @param newText
     */
    onChangeText?: (newText: string) => void;
    /** Parent message id - in case of thread */
    parent_id?: StreamMessage<At, Me, Us>['parent_id'];
    /**
     * Custom UI component for send button.
     *
     * Defaults to and accepts same props as: [SendButton](https://getstream.github.io/stream-chat-react-native/#sendbutton)
     */
    SendButton?: React.ComponentType<SendButtonProps>;
    /**
     * For images still in uploading state when user hits send, send text immediately and send image as follow-up message once uploaded
     */
    sendImageAsync?: boolean;
    /**
     * ref for input setter function
     */
    setInputRef?: (ref: TextInput | null) => void;
};
/**
 * UI Component for message input
 * It's a consumer of
 * [Channel Context](https://getstream.github.io/stream-chat-react-native/#channelcontext),
 * [Chat Context](https://getstream.github.io/stream-chat-react-native/#chatcontext),
 * [Messages Context](https://getstream.github.io/stream-chat-react-native/#messagescontext),
 * [Suggestions Context](https://getstream.github.io/stream-chat-react-native/#suggestionscontext), and
 * [Translation Context](https://getstream.github.io/stream-chat-react-native/#translationcontext)
 *
 * @example ./MessageInput.md
 */
export declare const MessageInput: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(props: MessageInputProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element;
