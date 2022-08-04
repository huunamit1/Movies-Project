import PropTypes from 'prop-types';
import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '~/components/Avatar';
import config from '~/config';
import { useSlug, useTV } from '~/hooks';

const Cast = ({ data }) => {
    const isTV = useTV();
    const slug = useSlug(data.name);
    const to = useMemo(
        () => `${isTV ? '/tv' : ''}/cast/${data.id}&${slug}`,
        [data.id, isTV, slug],
    );

    return (
        <div className="inline-block mr-0 w-[140px] select-none">
            <Avatar
                to={to}
                className="w-full h-[140px]"
                alt=""
                src={
                    data.profile_path
                        ? config.movieDB.image + data.profile_path
                        : null
                }
            />
            <h4 className="py-[15px] font-medium text-base text-center">
                <Link to={to}>{data.name}</Link>
            </h4>
        </div>
    );
};

Cast.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        profile_path: PropTypes.string,
    }).isRequired,
};

export default memo(Cast);
