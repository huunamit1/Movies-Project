import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

const UserActionsPopupMenu = ({ menu }) => {
    return (
        <div>
            <hr className="my-2 border-[rgba(0,0,0,.05)]" />

            <ul>
                {menu.map(({ title, ...props }) => {
                    let Component = 'span';

                    if (props.to) Component = Link;

                    return (
                        <li key={v4()}>
                            <Component
                                {...props}
                                className="cursor-pointer block py-[10px] text-sm leading-sm text-[#666]"
                            >
                                {title}
                            </Component>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

UserActionsPopupMenu.propTypes = {
    menu: PropTypes.array.isRequired,
};

export default UserActionsPopupMenu;
