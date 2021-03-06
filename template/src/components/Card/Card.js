import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Card = ({
    title,
    description,
    image,
    image_url = '',
    image_type,
    btn,
    className,
    children,
    card_color = 'white',
    text_align = 'tc',
    linkable = false
}) => {
    const card_class = classNames({
        [`bg-${card_color}`]: !!card_color,
        pointer: linkable,
        hoverable: linkable
    });

    const renderImage = () => {
        let image_class = '';

        switch (image_type) {
            case 'cover':
                image_class = classNames('w-100', 'br--top', 'br2');
                break;
            case 'circle':
                image_class = classNames('br-100', 'h3', 'w3', 'mt2', 'mt3-ns');
                break;
            case 'double-ring':
                image_class = classNames(
                    'br-100',
                    'h3',
                    'w3',
                    'pa1',
                    'ba',
                    'b--black-10',
                    'mt2',
                    'mt3-ns'
                );
                break;
            case 'rounded-large':
                image_class = classNames('br4', 'h3', 'w3', 'mt2', 'mt3-ns');
                break;
            case 'rounded':
                image_class = classNames('br2', 'h3', 'w3', 'mt2', 'mt3-ns');
                break;
            default:
                // square
                image_class = classNames('h3', 'w3', 'mt2', 'mt3-ns');
                break;
        }

        return (
            <div className="center">
                {image_url.length ? (
                    <img
                        data-testid="card-img"
                        src={image_url}
                        className={`db ${image_class}`}
                        alt="card avatar"
                    />
                ) : (
                    <div className={`db ${image_class}`}>{image}</div>
                )}
            </div>
        );
    };

    const renderBody = () => (
        <div className="pa2 pa3-ns min-h-3">
            {!!title && (
                <h6 className={`f6 b mb2 truncate ${text_align}`} title={title}>
                    {title}
                </h6>
            )}
            {!!description && (
                <p className={`f6 gray mt0 mv1 ${text_align}`}>{description}</p>
            )}
            {!!children && children}
        </div>
    );

    const renderFooterButton = () => {
        const btn_props = {
            bg_color: !!btn.bg_color ? btn.bg_color : 'white',
            text_color: !!btn.text_color ? btn.text_color : 'blue'
        };

        const btn_class_default = classNames({
            [`bg-${btn_props.bg_color}`]: true,
            [`hover-${btn_props.bg_color}`]: true,
            [`${btn_props.text_color}`]: true,
            [`hover-bg-${btn_props.text_color}`]: true
        });

        const btn_class_active = classNames({
            [`bg-${btn_props.text_color}`]: true,
            [`${btn_props.bg_color}`]: true
        });

        const btn_class = classNames(
            !!btn.active ? btn_class_active : btn_class_default
        );

        return (
            <div className="w-100 bt bp-bc-medium-wave">
                <button
                    data-testid="card-btn"
                    className={`w-100 link pointer tc ph3 pv3 db f6 b bg-animate b--none br3 br--bottom ${btn_class}`}
                    onClick={!!btn.onClick ? btn.onClick : () => {}}
                >
                    {!!btn.text && btn.text}
                </button>
            </div>
        );
    };

    return (
        <article
            className={`w-100 flex flex-column ba b--black-10 br3 shadow-6 animated fade-in ${card_class} ${className}`}
        >
            {(!!image || !!image_url) && renderImage()}
            {renderBody()}
            {!!btn && renderFooterButton()}
        </article>
    );
};

Card.propTypes = {
    title: PropTypes.any,
    description: PropTypes.string,
    image: PropTypes.any,
    image_url: PropTypes.string,
    image_type: PropTypes.string,
    btn: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.any,
    card_color: PropTypes.string,
    text_align: PropTypes.string,
    linkable: PropTypes.bool
};

export default Card;
