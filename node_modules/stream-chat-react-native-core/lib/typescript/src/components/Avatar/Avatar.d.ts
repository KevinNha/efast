import React from 'react';
export declare type AvatarProps = {
    /** image url */
    image?: string;
    /** name of the picture, used for title tag fallback */
    name?: string;
    /** size in pixels */
    size?: number;
    testID?: string;
};
/**
 * Avatar - A round avatar image with fallback to user's initials
 *
 * @example ./Avatar.md
 */
export declare const Avatar: React.FC<AvatarProps>;
