import React, { PropsWithChildren } from 'react';
import type { StreamChat } from 'stream-chat';
import type { ThemeType } from '../../contexts/themeContext/utils/replaceCssShorthand';
import type { Streami18n } from '../../utils/Streami18n';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type ChatProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    /** The StreamChat client object */
    client: StreamChat<At, Ch, Co, Ev, Me, Re, Us>;
    /**
     * Instance of Streami18n class should be provided to Chat component to enable internationalization.
     *
     * Stream provides following list of in-built translations:
     * 1. English (en)
     * 2. Dutch (nl)
     * 3. ...
     * 4. ...
     *
     * Simplest way to start using chat components in one of the in-built languages would be following:
     *
     * ```
     * const i18n = new Streami18n('nl');
     * <Chat client={chatClient} i18nInstance={i18n}>
     *  ...
     * </Chat>
     * ```
     *
     * If you would like to override certain keys in in-built translation.
     * UI will be automatically updated in this case.
     *
     * ```
     * const i18n = new Streami18n('nl');
     *
     * i18n.registerTranslation('nl', {
     *  'Nothing yet...': 'Nog Niet ...',
     *  '{{ firstUser }} and {{ secondUser }} are typing...': '{{ firstUser }} en {{ secondUser }} zijn aan het typen...',
     * });
     *
     * <Chat client={chatClient} i18nInstance={i18n}>
     *  ...
     * </Chat>
     * ```
     *
     * You can use the same function to add whole new language.
     *
     * ```
     * const i18n = new Streami18n('it');
     *
     * i18n.registerTranslation('it', {
     *  'Nothing yet...': 'Non ancora ...',
     *  '{{ firstUser }} and {{ secondUser }} are typing...': '{{ firstUser }} a {{ secondUser }} stanno scrivendo...',
     * });
     *
     * // Make sure to call setLanguage to reflect new language in UI.
     * i18n.setLanguage('it');
     * <Chat client={chatClient} i18nInstance={i18n}>
     *  ...
     * </Chat>
     * ```
     */
    i18nInstance?: Streami18n;
    logger?: (message?: string) => void;
    style?: ThemeType;
};
/**
 * Chat - Wrapper component for Chat. The needs to be placed around any other chat components.
 * This Chat component provides the ChatContext to all other components.
 *
 * The ChatContext provides the following props:
 *
 * - channel - currently active channel
 * - client - client connection
 * - connectionRecovering - whether or not websocket is reconnecting
 * - isOnline - whether or not set user is active
 * - logger - custom logging function
 * - setActiveChannel - function to set the currently active channel
 *
 * The Chat Component takes the following generics in order:
 * - At (AttachmentType) - custom Attachment object extension
 * - Ct (ChannelType) - custom Channel object extension
 * - Co (CommandType) - custom Command string union extension
 * - Ev (EventType) - custom Event object extension
 * - Me (MessageType) - custom Message object extension
 * - Re (ReactionType) - custom Reaction object extension
 * - Us (UserType) - custom User object extension
 *
 * @example ./Chat.md
 */
export declare const Chat: <At extends Record<string, unknown> = DefaultAttachmentType, Ch extends Record<string, unknown> = DefaultChannelType, Co extends string = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends Record<string, unknown> = Record<string, unknown>, Re extends Record<string, unknown> = Record<string, unknown>, Us extends Record<string, unknown> = DefaultUserType>(props: React.PropsWithChildren<ChatProps<At, Ch, Co, Ev, Me, Re, Us>>) => JSX.Element | null;
