import React from 'react';
import type { Attachment } from 'stream-chat';
import type { Alignment } from '../../contexts/messagesContext/MessagesContext';
import type { DefaultAttachmentType, UnknownType } from '../../types/types';
export declare type CardProps<At extends UnknownType = DefaultAttachmentType> = Attachment<At> & {
    /**
     * Position of the message, either 'right' or 'left'
     */
    alignment: Alignment;
    /**
     * Custom UI component to override default cover (between Header and Footer) of Card component.
     * Accepts the same props as Card component.
     */
    Cover?: React.ComponentType<CardProps<At>>;
    /**
     * Custom UI component to override default Footer of Card component.
     * Accepts the same props as Card component.
     */
    Footer?: React.ComponentType<CardProps<At>>;
    /**
     * Custom UI component to override default header of Card component.
     * Accepts the same props as Card component.
     */
    Header?: React.ComponentType<CardProps<At>>;
};
/**
 * UI component for card in attachments.
 *
 * @example ./Card.md
 */
export declare const Card: <At extends Record<string, unknown> = DefaultAttachmentType>(props: CardProps<At>) => JSX.Element;
