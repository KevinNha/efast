import type { NetInfoSubscription } from '@react-native-community/netinfo';
declare type NetInfo = {
    addEventListener: (listener: (isConnected: boolean) => void) => NetInfoSubscription | never;
    fetch: (requestedInterface?: string | undefined) => Promise<boolean> | never;
};
export declare let NetInfo: NetInfo;
declare type PickImage = ({ compressImageQuality, maxNumberOfFiles, }: {
    compressImageQuality?: number;
    maxNumberOfFiles?: number;
}) => Promise<{
    cancelled: boolean;
    images?: {
        uri: string;
    }[];
}> | never;
export declare let pickImage: PickImage;
declare type PickDocument = ({ maxNumberOfFiles, }: {
    maxNumberOfFiles?: number;
}) => Promise<{
    cancelled: boolean;
    docs?: {
        name: string;
        size?: number | string;
        type?: string;
        uri?: string;
    }[];
}> | never;
export declare let pickDocument: PickDocument;
declare type Handlers = {
    NetInfo?: NetInfo;
    pickDocument?: PickDocument;
    pickImage?: PickImage;
};
export declare const registerNativeHandlers: (handlers: Handlers) => void;
export {};
