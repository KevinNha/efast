import type { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { CSSObject } from 'styled-components';
export declare const BASE_FONT_SIZE = 16;
export declare const Colors: {
    danger: string;
    light: string;
    primary: string;
    secondary: string;
    textDark: string;
    textGrey: string;
    textLight: string;
    transparent: string;
};
export declare type CSS = {
    css?: CSSObject;
};
export declare type MarkdownStyle = Partial<{
    blockQuoteBar: StyleProp<ViewStyle>;
    blockQuoteSection: StyleProp<ViewStyle>;
    blockQuoteSectionBar: StyleProp<ViewStyle>;
    blockQuoteText: StyleProp<ViewStyle>;
    codeBlock: StyleProp<TextStyle>;
    del: StyleProp<TextStyle>;
    em: StyleProp<TextStyle>;
    heading: StyleProp<TextStyle>;
    heading1: StyleProp<TextStyle>;
    heading2: StyleProp<TextStyle>;
    heading3: StyleProp<TextStyle>;
    heading4: StyleProp<TextStyle>;
    heading5: StyleProp<TextStyle>;
    heading6: StyleProp<TextStyle>;
    hr: StyleProp<ViewStyle>;
    image: StyleProp<ImageStyle>;
    inlineCode: StyleProp<TextStyle>;
    link: StyleProp<TextStyle>;
    listItem: StyleProp<ViewStyle>;
    listItemBulletType: string;
    listItemButton: StyleProp<TextStyle>;
    listItemNumber: StyleProp<TextStyle>;
    listItemText: StyleProp<TextStyle>;
    mailTo: StyleProp<TextStyle>;
    paragraph: StyleProp<ViewStyle>;
    strong: StyleProp<TextStyle>;
    table: StyleProp<ViewStyle>;
    tableHeader: StyleProp<ViewStyle>;
    tableHeaderCell: StyleProp<ViewStyle>;
    tableRow: StyleProp<ViewStyle>;
    tableRowCell: StyleProp<ViewStyle>;
    tableRowLast: StyleProp<ViewStyle>;
    text: StyleProp<TextStyle>;
    u: StyleProp<TextStyle>;
    video: StyleProp<ImageStyle>;
    view: StyleProp<ViewStyle>;
}>;
export declare type Theme = {
    avatar: {
        container: CSS;
        fallback: CSS;
        image: CSS;
        text: CSS;
    };
    channelListFooterLoadingIndicator: {
        container: CSS;
    };
    channelListHeaderErrorIndicator: {
        container: CSS;
        errorText: CSS;
    };
    channelListHeaderNetworkDownIndicator: {
        container: CSS;
        errorText: CSS;
    };
    channelPreview: {
        container: CSS;
        date: CSS;
        details: CSS;
        detailsTop: CSS;
        message: CSS & {
            color: string;
            fontWeight: string;
            unreadColor: string;
            unreadFontWeight: string;
        };
        title: CSS;
    };
    closeButton: {
        container: CSS;
    };
    colors: typeof Colors;
    iconBadge: {
        container: CSS;
        icon: CSS;
        iconInner: CSS;
        unreadCount: CSS;
    };
    iconSquare: {
        container: CSS;
    };
    loadingErrorIndicator: {
        container: CSS;
        errorText: CSS;
        retryText: CSS;
    };
    loadingIndicator: {
        container: CSS;
        loadingText: CSS;
    };
    message: {
        actions: {
            button: CSS & {
                defaultBackgroundColor: string;
                defaultBorderColor: string;
                primaryBackgroundColor: string;
                primaryBorderColor: string;
            };
            buttonText: CSS & {
                defaultColor: string;
                primaryColor: string;
            };
            container: CSS;
        };
        actionSheet: {
            buttonContainer: CSS;
            buttonText: CSS;
            cancelButtonContainer: CSS;
            cancelButtonText: CSS;
            titleContainer: CSS;
            titleText: CSS;
        };
        avatarWrapper: {
            container: CSS;
            spacer: CSS;
        };
        card: {
            container: CSS;
            cover: CSS;
            footer: CSS & {
                description: CSS;
                link: CSS;
                logo: CSS;
                title: CSS;
            };
        };
        container: CSS;
        content: {
            container: CSS & {
                borderRadiusL: number;
                borderRadiusS: number;
            };
            containerInner: CSS;
            deletedContainer: CSS;
            deletedText: CSS;
            errorContainer: CSS & {
                backgroundColor: string;
            };
            markdown: MarkdownStyle;
            metaContainer: CSS;
            metaText: CSS;
            textContainer: CSS & {
                borderRadiusL: number;
                borderRadiusS: number;
                leftBorderColor: string;
                leftBorderWidth: number;
                rightBorderColor: string;
                rightBorderWidth: number;
            };
        };
        file: {
            container: CSS;
            details: CSS;
            icon: CSS;
            size: CSS;
            title: CSS;
        };
        gallery: {
            doubleSize: number;
            galleryContainer: CSS;
            halfSize: number;
            header: {
                button: CSS;
                container: CSS;
            };
            imageContainer: CSS;
            single: CSS;
            size: number;
            width: number;
        };
        reactionList: {
            container: CSS;
            reactionCount: CSS;
        };
        reactionPicker: {
            column: CSS;
            container: CSS;
            containerView: CSS;
            emoji: CSS;
            reactionCount: CSS;
            text: CSS;
        };
        replies: {
            container: CSS;
            image: CSS;
            messageRepliesText: CSS;
        };
        status: {
            checkMark: CSS;
            deliveredCircle: CSS;
            deliveredContainer: CSS;
            readByContainer: CSS;
            readByCount: CSS;
            sendingContainer: CSS;
            sendingImage: CSS;
            spacer: CSS;
        };
    };
    messageInput: {
        actionSheet: {
            buttonContainer: CSS;
            buttonText: CSS;
            titleContainer: CSS;
            titleText: CSS;
        };
        attachButton: CSS;
        attachButtonIcon: CSS;
        container: CSS & {
            conditionalPadding: number;
        };
        editingBoxContainer: CSS;
        editingBoxHeader: CSS;
        editingBoxHeaderTitle: CSS;
        fileUploadPreview: {
            attachmentContainerView: CSS;
            attachmentView: CSS;
            container: CSS;
            dismiss: CSS;
            dismissImage: CSS;
            filenameText: CSS;
            itemContainer: CSS;
        };
        imageUploadPreview: {
            container: CSS;
            dismiss: CSS;
            dismissImage: CSS;
            itemContainer: CSS;
            upload: CSS;
        };
        inputBox: CSS;
        inputBoxContainer: CSS;
        sendButton: CSS;
        sendButtonIcon: CSS;
        suggestions: {
            command: {
                args: CSS;
                container: CSS;
                description: CSS;
                title: CSS;
                top: CSS;
            };
            container: CSS & {
                itemHeight: number;
                maxHeight: number;
            };
            item: CSS;
            mention: {
                container: CSS;
                name: CSS;
            };
            separator: CSS;
            title: CSS;
            wrapper: CSS;
        };
        uploadProgressIndicator: {
            container: CSS;
            overlay: CSS;
        };
    };
    messageList: {
        dateSeparator: {
            container: CSS;
            date: CSS;
            dateText: CSS;
            line: CSS;
        };
        errorNotification: CSS;
        errorNotificationText: CSS;
        eventIndicator: {
            date: CSS;
            memberUpdateContainer: CSS;
            memberUpdateText: CSS;
            memberUpdateTextContainer: CSS;
        };
        listContainer: CSS;
        messageNotification: {
            container: CSS;
            text: CSS;
        };
        messageSystem: {
            container: CSS;
            dateText: CSS;
            line: CSS;
            text: CSS;
            textContainer: CSS;
        };
        typingIndicatorContainer: CSS;
    };
    spinner: CSS;
    thread: {
        newThread: CSS & {
            text: CSS;
        };
    };
    typingIndicator: {
        container: CSS;
        text: CSS & {
            color: string;
            fontSize: number;
        };
    };
};
export declare const defaultTheme: Theme;
