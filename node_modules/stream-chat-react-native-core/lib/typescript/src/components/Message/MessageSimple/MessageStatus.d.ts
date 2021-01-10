/// <reference types="react" />
import type { ForwardedMessageProps } from './MessageContent';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType } from '../../../types/types';
export declare const MessageStatus: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType = DefaultUserType>(props: ForwardedMessageProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element;
