import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    type,
    variant,
    icon,
    text,
    arrow,
    size,
    disabled,
    children,
    iconOnly = false,
    aria_label = 'bds-button',
    data_testid = 'bds-button',
    onClick = () => {}
}) => {
    return !!iconOnly ? (
        <bds-button-icon
            data-testid={data_testid}
            aria-label={aria_label}
            type={type}
            icon={icon}
            variant={variant}
            size={size}
            arrow={arrow}
            disabled={disabled}
            onClick={onClick}
        ></bds-button-icon>
    ) : (
        <bds-button
            data-testid={data_testid}
            aria-label={aria_label}
            type={type}
            icon={icon}
            variant={variant}
            size={size}
            arrow={arrow}
            disabled={disabled}
            onClick={onClick}
        >
            {!!text ? text : children}
        </bds-button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    variant: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string,
    arrow: PropTypes.bool,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.any,
    iconOnly: PropTypes.bool,
    aria_label: PropTypes.string,
    data_testid: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;
