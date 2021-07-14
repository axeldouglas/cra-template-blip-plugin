import React from 'react';
import Proptypes from 'prop-types';

const PageHeader = ({
    title,
    icon,
    is_informative = false,
    help_text,
    is_back_navigation = false,
    onBackPressed,
    relatedOptions
}) => {
    const renderInfoTitle = () => (
        <div
            className="help pt1 bp-c-neutral-medium-cloud"
            data-testid="page-header-tooltip"
        >
            <bds-tooltip tooltip-text={help_text} position="right-center">
                <bds-icon name="info" theme="solid" size="small" />
            </bds-tooltip>
        </div>
    );

    return (
        <div className="flex flex-column flex-row-ns items-center-ns justify-between w-100 mt3 pt2 pb3 bb bp-bc-neutral-medium-wave">
            <div className="flex items-center">
                {is_back_navigation && (
                    <div
                        className="pointer mr1 bp-c-neutral-dark-rooftop"
                        onClick={onBackPressed}
                        data-testid="page-header-back-icon"
                    >
                        <bds-icon name="arrow-left" />
                    </div>
                )}

                {!!icon && (
                    <div
                        className="bp-c-neutral-dark-rooftop"
                        data-testid="page-header-icon"
                    >
                        <bds-icon name={icon} />
                    </div>
                )}

                <h2 className="f3 ma0 ml2 mr1 bp-c-neutral-dark-city">
                    {title}
                </h2>

                {is_informative && !!help_text && renderInfoTitle()}
            </div>
            {!!relatedOptions && (
                <div className="flex items-center justify-end">
                    {relatedOptions}
                </div>
            )}
        </div>
    );
};

PageHeader.propTypes = {
    title: Proptypes.string,
    icon: Proptypes.string,
    is_informative: Proptypes.bool,
    help_text: Proptypes.string,
    is_back_navigation: Proptypes.bool,
    onBackPressed: Proptypes.func,
    relatedOptions: Proptypes.any
};

export default PageHeader;
