import React from 'react';
import Dayjs from 'dayjs';
import type { TFunction } from 'i18next';
import type { Moment } from 'moment';
export declare const isDayOrMoment: (output: TDateTimeParserOutput) => output is Dayjs.Dayjs | Moment;
export declare type TDateTimeParserInput = string | number | Date;
export declare type TDateTimeParserOutput = string | number | Date | Dayjs.Dayjs | Moment;
export declare type TDateTimeParser = (input?: TDateTimeParserInput) => TDateTimeParserOutput;
export declare type TranslationContextValue = {
    t: TFunction | ((key: string) => string);
    tDateTimeParser: TDateTimeParser;
};
export declare const TranslationContext: React.Context<TranslationContextValue>;
export declare const TranslationProvider: React.FC<{
    value: TranslationContextValue;
}>;
export declare const useTranslationContext: () => TranslationContextValue;
export declare const withTranslationContext: <P extends Record<string, unknown>>(Component: React.ComponentType<P>) => React.FC<Pick<P, Exclude<keyof P, "t" | "tDateTimeParser">>>;
