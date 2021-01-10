import Dayjs from 'dayjs';
import { TFunction } from 'i18next';
import enTranslations from '../i18n/en.json';
import 'dayjs/locale/fr';
import 'dayjs/locale/hi';
import 'dayjs/locale/it';
import 'dayjs/locale/nl';
import 'dayjs/locale/ru';
import 'dayjs/locale/tr';
/**
 * These locale imports also set these locales globally.
 * So as a last step we import the english locale to make
 * sure we don't mess up languages in other places in the app.
 */
import 'dayjs/locale/en';
import type moment from 'moment';
import type { TDateTimeParser } from '../contexts/translationContext/TranslationContext';
import type { UnknownType } from '../types/types';
declare type Options = {
    DateTimeParser?: typeof Dayjs | typeof moment;
    dayjsLocaleConfigForLanguage?: Partial<ILocale>;
    debug?: boolean;
    disableDateTimeTranslations?: boolean;
    language?: string;
    logger?: (msg?: string) => void;
    translationsForLanguage?: typeof enTranslations;
};
export declare class Streami18n {
    i18nInstance: import("i18next").i18n;
    Dayjs: null;
    setLanguageCallback: (t: TFunction) => void;
    initialized: boolean;
    t: TFunction;
    tDateTimeParser: TDateTimeParser;
    translations: {
        [key: string]: {
            [key: string]: typeof enTranslations | UnknownType;
        };
    };
    /**
     * dayjs.defineLanguage('nl') also changes the global locale. We don't want to do that
     * when a user calls the registerTranslation() function. So instead we will store the
     * locale configs given to the registerTranslation() function in `dayjsLocales` object,
     * and register the required locale with moment when setLanguage is called.
     */
    dayjsLocales: {
        [key: string]: Partial<ILocale>;
    };
    /**
     * Initialize properties used in constructor
     */
    logger: (msg?: string) => void;
    currentLanguage: string;
    DateTimeParser: typeof Dayjs | typeof moment;
    isCustomDateTimeParser: boolean;
    i18nextConfig: {
        debug: boolean;
        fallbackLng: false;
        interpolation: {
            escapeValue: boolean;
        };
        keySeparator: false;
        lng: string;
        nsSeparator: false;
        parseMissingKeyHandler: (key: string) => string;
    };
    /**
     * Constructor accepts following options:
     *  - language (String) default: 'en'
     *    Language code e.g., en, tr
     *
     *  - translationsForLanguage (object)
     *    Translations object. Please check src/i18n/en.json for example.
     *
     *  - disableDateTimeTranslations (boolean) default: false
     *    Disable translations for date-times
     *
     *  - debug (boolean) default: false
     *    Enable debug mode in internal i18n class
     *
     *  - logger (function) default: () => {}
     *    Logger function to log warnings/errors from this class
     *
     *  - dayjsLocaleConfigForLanguage (object) default: 'enConfig'
     *    [Config object](https://momentjs.com/docs/#/i18n/changing-locale/) for internal moment object,
     *    corresponding to language (param)
     *
     *  - DateTimeParser (function) Moment or Dayjs instance/function.
     *    Make sure to load all the required locales in this Moment or Dayjs instance that you will be provide to Streami18n
     *
     * @param {*} options
     */
    constructor(options?: Options);
    /**
     * Initializes the i18next instance with configuration (which enables natural language as default keys)
     */
    init(): Promise<{
        t: TFunction;
        tDateTimeParser: TDateTimeParser;
    }>;
    localeExists: (language: string) => boolean;
    validateCurrentLanguage: () => void;
    /** Returns an instance of i18next used within this class instance */
    geti18Instance: () => import("i18next").i18n;
    /** Returns list of available languages. */
    getAvailableLanguages: () => string[];
    /** Returns all the translation dictionary for all inbuilt-languages */
    getTranslations: () => {
        [key: string]: {
            [key: string]: Record<string, unknown> | {
                "1 reply": string;
                "Add Reaction": string;
                "Add a file": string;
                Cancel: string;
                "Choose an action": string;
                Commands: string;
                "Connection failure, reconnecting now ...": string;
                "Delete Message": string;
                "ERROR \u00B7 UNSENT": string;
                "Edit Message": string;
                "Editing Message": string;
                "Empty message...": string;
                "Error loading": string;
                "Error loading channel list ...": string;
                "Error loading messages for this channel ...": string;
                "Error while loading, please reload/refresh": string;
                "Loading ...": string;
                "Loading channels ...": string;
                "Loading messages ...": string;
                "Message deleted": string;
                "Message failed - try again": string;
                "New Messages": string;
                "Nothing yet...": string;
                "Please select a channel first": string;
                Reply: string;
                "Searching for people": string;
                "Start of a new thread": string;
                "This message was deleted ...": string;
                "Upload a file": string;
                "Upload a photo": string;
                "Write your message": string;
                "{{ commaSeparatedUsers }} and {{ lastUser }} are typing...": string;
                "{{ firstUser }} and {{ secondUser }} are typing...": string;
                "{{ imageCount }} more": string;
                "{{ replyCount }} replies": string;
                "{{ user }} is typing...": string;
                "\uD83C\uDFD9 Attachment...": string;
            };
        };
    };
    /**
     * Returns current version translator function.
     */
    getTranslators(): Promise<{
        t: TFunction;
        tDateTimeParser: TDateTimeParser;
    }>;
    /**
     * Register translation
     */
    registerTranslation(language: string, translation: typeof enTranslations, customDayjsLocale?: Partial<ILocale>): void;
    addOrUpdateLocale(key: string, config: Partial<ILocale>): void;
    /**
     * Changes the language.
     */
    setLanguage(language: string): Promise<TFunction | undefined>;
    registerSetLanguageCallback(callback: (t: TFunction) => void): void;
}
export {};
