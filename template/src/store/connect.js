import React from 'react';
import { StoreContext } from '../hooks/store';

const returnPropsAsDefault = (store, props) => props;

const Connect = (mapStateToProps = returnPropsAsDefault) => (Component) => {
    return function WrapConnect(props) {
        return (
            <StoreContext.Consumer>
                {({ dispatch, store }) => {
                    const storeProps = mapStateToProps(store, props);
                    return <Component {...storeProps} dispatch={dispatch} />;
                }}
            </StoreContext.Consumer>
        );
    };
};

export default Connect;
