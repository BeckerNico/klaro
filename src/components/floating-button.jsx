import React from 'react';
import { show as libShow } from '../lib';

export default class FloatingButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            confirming: false,
        };
    }

    render() {
        const { config, show, manager, t } = this.props;

        const showModal = (e) => {
            e.preventDefault();
            libShow()
            sessionStorage.setItem('triggerElement', e.target.id);
        };

        if (!show) return <div />;
        const noticeIsVisible =
            !config.mustConsent &&
            manager.confirmed &&
            config.showFloatingButton;

        return (
            <button
                className={`floating-button ${
                    !noticeIsVisible ? 'floating-button-hidden' : ''
                }`}
                id="floating-button"
                onClick={showModal}
            >
                {t(['floatingButtonTitle'])}
            </button>
        );
    }
}
