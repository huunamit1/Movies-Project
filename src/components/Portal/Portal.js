import PropTypes from 'prop-types';
import { useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

function createPortalWrapper() {
    const element = document.createElement('div');
    element.id = 'portal-wrapper';

    return element;
}

const portalWrapper = createPortalWrapper();
const Portal = ({ children }) => {
    useLayoutEffect(() => {
        document.body.appendChild(portalWrapper);
    }, []);

    return createPortal(children, portalWrapper);
};

Portal.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Portal;
