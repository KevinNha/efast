import React from 'react';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType } from '../../types/types';
declare type Props = {
    children?: React.ReactNode;
};
export declare const TypingIndicatorContainer: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType = DefaultUserType>({ children, }: Props) => JSX.Element | null;
export {};
