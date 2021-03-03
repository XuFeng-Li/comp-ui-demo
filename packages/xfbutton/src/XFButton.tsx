import './XFButton.css';
import * as React from "react";

export interface XFButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the xfbutton be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * XFButton contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */

export const XFButton: React.FC<XFButtonProps> = ({
                                                  primary = false,
                                                  size = 'medium',
                                                  backgroundColor,
                                                  label,
                                                  ...props
                                              }) => {
    const mode = primary ? 'storybook-xfbutton--primary' : 'storybook-xfbutton--secondary';
    return (
        <button
            type="button"
            className={['storybook-xfbutton', `storybook-button--${size}`, mode].join(' ')}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};
