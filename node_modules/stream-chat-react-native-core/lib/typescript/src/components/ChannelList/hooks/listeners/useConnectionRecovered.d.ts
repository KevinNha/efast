/// <reference types="react" />
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType } from '../../../../types/types';
declare type Parameters = {
    setForceUpdate: React.Dispatch<React.SetStateAction<number>>;
};
export declare const useConnectionRecovered: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>({ setForceUpdate, }: Parameters) => void;
export {};
