import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Image from '~/components/Image';
import config from '~/config';
import { useSlug, useTV, useWindowDimensions } from '~/hooks';

const MovieItem = ({ hoverImage = true, data, className = '', rounded }) => {
    const { width } = useWindowDimensions();
    const slugTitle = useSlug(data.name || data.title);
    const isTV = useTV();

    const to = `/${isTV ? 'tv' : 'movie'}/${slugTitle}?id=${data.id}`;

    return (
        <div className={className}>
            <Link
                to={to}
                className={`flex-1 group relative block ${
                    rounded ? `rounded-[${rounded}]` : 'rounded-2xl'
                } overflow-hidden aspect-[2/3]`}
            >
                <Image
                    alt={data.title || data.name}
                    src={
                        data.poster_path
                            ? config.movieDB.image + data.poster_path
                            : config.imageBackup
                    }
                />
                {hoverImage && width >= 1024 && (
                    <>
                        <div className="absolute inset-0 bg-black bg-opacity-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 ease-ease duration-300" />
                        <Button
                            className="!absolute w-fit top-[60%] left-2/4 font-semibold text-sm z-5 bg-white -translate-x-2/4 -translate-y-2/4 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:top-2/4 ease-ease duration-300"
                            rounded
                        >
                            Watch movie
                        </Button>
                    </>
                )}
            </Link>
            <div className="flex">
                <h3 className="inline-block">
                    <Link
                        className="my-[0.625em] leading-[1.4] text-base font-semibold text-[#292929] line-clamp-1  ease-linear duration-300 hover:text-primary"
                        to={to}
                    >
                        {data.title || data.name}
                    </Link>
                </h3>
            </div>
        </div>
    );
};

MovieItem.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        poster_path: PropTypes.string,
    }).isRequired,
    className: PropTypes.string,
};

export default MovieItem;
