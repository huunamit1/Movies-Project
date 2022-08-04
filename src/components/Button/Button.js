import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({
    to,
    href,
    children,
    rounded,
    primary,
    outline,
    link,
    className,
    large,
    disabled,
    isLoading,
    onClick = () => {},
}) => {
    let style = '';
    const props = {};
    let Component = 'button';

    if (to) {
        Component = Link;
        props.to = to;
    } else if (href) {
        Component = 'a';
        props.href = href;
    }

    if (large) style += ` py-[14px] h-11 min-w-[150px] text-base`;
    else style += ` py-[9px] min-w-[12px] text-sm`;

    if (primary) {
        style += ` bg-primary text-white`;
    } else if (outline) {
        const type = outline?.split?.('-')?.[1];
        if (type) style += ` border border-${type} text-${type}`;
        else style += ` border border-primary text-primary`;
    } else if (link) {
        style += ` font-normal text-sm`;
    } else {
    }

    if (rounded) {
        style += ` rounded-full`;
    } else {
        style += ` rounded-lg`;
    }

    return (
        <Component
            onClick={onClick}
            disabled={disabled || isLoading}
            {...props}
            className={`${
                disabled || isLoading ? 'opacity-60' : ''
            } ${style} ${className} flex items-center justify-center gap-2 relative transition-all font-semibold leading-sm px-5`}
        >
            {(isLoading && (
                <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                    <span className="inline-block w-8 h-8 border-4 border-white border-t-red-500 rounded-full animate-spin" />
                </div>
            )) ||
                children}
        </Component>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    rounded: PropTypes.bool,
    primary: PropTypes.bool,
    large: PropTypes.bool,
    outline: PropTypes.any,
    className: PropTypes.string,
};

export default Button;
