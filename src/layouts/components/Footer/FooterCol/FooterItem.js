import PropTypes from 'prop-types';

const FooterItem = ({ iconColor = '', icon, children }) => {
    const Icon = icon;

    return (
        <div className="flex items-center gap-2">
            <Icon className={`w-5 h-5 ${iconColor}`} />
            <span className="font-medium text-base text-white">{children}</span>
        </div>
    );
};
FooterItem.propTypes = {
    icon: PropTypes.any,
    children: PropTypes.node.isRequired,
};

export default FooterItem;
