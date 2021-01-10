import React from 'react';
import { AvatarProps } from '../Avatar/Avatar';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType } from '../../types/types';
export declare type TypingIndicatorProps = {
    /**
     * Defaults to and accepts same props as: [Avatar](https://getstream.github.io/stream-chat-react-native/#avatar)
     */
    Avatar?: React.ComponentType<AvatarProps>;
};
export declare const TypingIndicator: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType = DefaultUserType>({ Avatar, }: TypingIndicatorProps) => JSX.Element;
