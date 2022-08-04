import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import config from '~/config';
import { useSlug } from '~/hooks';

const MovieBackdropItem = ({ data, render }) => {
    const slug = useSlug(data?.title || data?.name);
    if (!data) return null;

    const to = (data.title ? '/movie' : '/tv') + `/${slug}?id=${data.id}`;

    return (
        <div className="pb-5 select-none">
            <Link
                to={to}
                className="aspect-video group relative block rounded overflow-hidden"
            >
                <Image
                    alt=""
                    src={`${
                        data?.backdrop_path
                            ? config.movieDB.image + data?.backdrop_path
                            : config.imageBackup
                    }`}
                />
                {render}
            </Link>
            <div>
                <h3 className="inline-block line-clamp-1 font-medium text-base mt-[15px] mb-[5px]">
                    <Link
                        to={to}
                        className="hover:text-primary ease-ease duration-300"
                    >
                        {data.title || data.name}
                    </Link>
                </h3>
            </div>
        </div>
    );
};

MovieBackdropItem.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        name: PropTypes.string,
        id: PropTypes.number,
        backdrop_path: PropTypes.string,
    }).isRequired,
    render: PropTypes.node,
};

export default MovieBackdropItem;
