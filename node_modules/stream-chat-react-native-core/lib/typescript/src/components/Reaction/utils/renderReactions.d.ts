/// <reference types="react" />
import type { LatestReactions, Reaction } from '../ReactionList';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType } from '../../../types/types';
export declare const renderReactions: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(reactions: LatestReactions<At, Ch, Co, Me, Re, Us>, supportedReactions: Reaction[]) => (JSX.Element | null)[];
