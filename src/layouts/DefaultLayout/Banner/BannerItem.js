import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import Button from '~/components/Button';
import config from '~/config';
import { useTV, useWindowDimensions } from '~/hooks';

const BannerItem = ({ data }) => {
    const { width } = useWindowDimensions();
    const isTV = useTV();
    const to = useMemo(
        () =>
            `/${isTV ? 'tv' : 'movie'}/${slugify(
                data.title || data.name || '',
                {
                    locale: 'vi',
                    lower: true,
                    strict: true,
                },
            )}?id=${data.id}`,
        [data.id, data.name, data.title, isTV],
    );
    const isSm = width >= 640;

    return (
        <div
            style={{
                backgroundImage: `url(${
                    data.backdrop_path
                        ? config.movieDB.image + data.backdrop_path
                        : config.imageBackup
                })`,
            }}
            className="min-h-[270px] md:min-h-[350px] rounded-xl bg-cover bg-center relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute inset-0 flex flex-col justify-center p-9 w-full max-w-[640px]">
                <h1 className="mb-2 text-[32px] font-bold leading-normal text-white">
                    <Link to={to} className="line-clamp-3">
                        {data.title ?? data.name}
                    </Link>
                </h1>
                {isSm && (
                    <p className="mb-6 text-white leading-[1.6] line-clamp-3">
                        {data.overview}
                    </p>
                )}
                <Button
                    to={to}
                    className="w-fit border-2 font-bold leading-[1.6] py-[4px] px-[10px] hover:bg-white hover:text-primary"
                    outline="outline-white"
                    rounded
                >
                    Watch now
                </Button>
            </div>
        </div>
    );
};

export default BannerItem;
