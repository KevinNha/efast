/// <reference types="react" />
import { TDateTimeParserInput } from '../../contexts/translationContext/TranslationContext';
import type { DateSeparator as DateSeparatorType } from './utils/insertDates';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type DateSeparatorProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    message: DateSeparatorType<At, Ch, Co, Ev, Me, Re, Us>;
    /**
     * Formatter function for date object.
     *
     * @param date TDateTimeParserInput object of message
     * @returns string
     */
    formatDate?: (date: TDateTimeParserInput) => string;
};
/**
 * @example ./DateSeparator.md
 */
export declare const DateSeparator: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(props: DateSeparatorProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element;
