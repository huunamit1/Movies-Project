import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import Image from '~/components/Image';

const MovieItemInImg = ({ className, data }) => {
    const slugTitle = useMemo(
        () =>
            slugify(data.title || '', {
                lower: true,
                strict: true,
                locale: 'vi',
            }),
        [data.title],
    );

    return (
        <Link
            className={`${className} aspect-[2/3] relative block mb-5 rounded-2xl overflow-hidden`}
            to={`/movie/${slugTitle}?id=${data.id}`}
        >
            <Image
                alt=""
                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            />
            <div className="absolute w-full left-0 bottom-0 py-2 px-4 bg-black bg-opacity-60">
                <h4 className="font-medium text-sm text-white">{data.title}</h4>
            </div>
        </Link>
    );
};

export default MovieItemInImg;
