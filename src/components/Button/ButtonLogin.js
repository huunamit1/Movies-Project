import PropTypes from 'prop-types';

const ButtonLogin = ({ icon, children, onClick = () => {} }) => {
    const Icon = icon;

    return (
        <div
            className="cursor-pointer border-2 border-stone-400 hover:bg-stone-100 rounded-full relative flex items-center justify-center w-full max-w-[320px] h-11 ease-linear duration-300"
            onClick={onClick}
        >
            {icon && <Icon className="absolute left-[18px] w-5 h-5" />}
            <span className="font-semibold text-sm">{children}</span>
        </div>
    );
};

ButtonLogin.propTypes = {
    icon: PropTypes.any,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default ButtonLogin;
