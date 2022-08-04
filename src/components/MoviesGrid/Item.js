import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import config from '~/config';
import { useSlug } from '~/hooks';

const Item = ({ data }) => {
    const slug = useSlug(data?.title ?? data?.name);
    const to = useMemo(
        () => `/${data?.title ? 'movie' : 'tv'}/${slug}?id=${data?.id}`,
        [data?.id, data?.title, slug],
    );

    return (
        <div>
            <Link className="block aspect-video" to={to}>
                <Image
                    alt={data.title ?? data.name}
                    src={`${
                        data?.backdrop_path
                            ? config.movieDB.image + data?.backdrop_path
                            : config.imageBackup
                    }`}
                />
            </Link>
            <h2 className="my-2 font-medium text-base hover:text-primary ease-linear duration-300 cursor-pointer">
                <Link to={to}>{data.title ?? data.name}</Link>
            </h2>
        </div>
    );
};

Item.propTypes = {
    data: PropTypes.shape({
        backdrop_path: PropTypes.string,
        title: PropTypes.string,
        id: PropTypes.number.isRequired,
    }).isRequired,
};

export default Item;
