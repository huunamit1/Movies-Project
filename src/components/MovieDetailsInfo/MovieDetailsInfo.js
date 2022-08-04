import { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { v4 } from 'uuid';
import Button from '~/components/Button';
import { HeartSolidIcon } from '~/components/Icons';
import Image from '~/components/Image';
import SlugLink from '~/components/SlugLink';
import config from '~/config';
import useAuth from '~/context/Auth';
import { useMovieDetails } from '~/context/MovieDetails';
import { useTV } from '~/hooks';
import getDMY from '~/utils/getDMY';
import * as httpRequest from '~/utils/httpRequest';

const MovieDetailsInfo = () => {
    const { user } = useAuth();
    const { slug, movieId, movieDetail, credits } = useMovieDetails();
    const [favorites, setFavorites] = useState(false);
    const isTV = useTV();

    const handleToggleFavorites = async () => {
        setFavorites((favorites) => !favorites);
        await httpRequest.post(
            `/user/${user.uid}/favorites-${
                isTV ? 'tv?tvId' : 'movie?movieId'
            }=${movieId}`,
        );
    };

    useLayoutEffect(() => {
        async function getData() {
            const result = await httpRequest.get(
                `/user/${user.uid}/favorites-${
                    isTV ? 'tv?tvId' : 'movie?movieId'
                }=${movieId}`,
            );
            setFavorites(result?.favorites);
        }

        if (user?.uid) getData();
    }, [isTV, movieId, user?.uid]);

    const movieInfoMenu = [
        {
            title: 'Director',
            children: credits?.cast
                ?.filter((cast) => cast.known_for_department === 'Directing')
                ?.map((cast) => <SlugLink key={cast.id}>{cast.name}</SlugLink>),
        },
        {
            title: 'Casts',
            children: credits?.cast
                ?.filter((cast) => cast.known_for_department === 'Acting')
                ?.slice(0, 4)
                ?.map((cast) => (
                    <SlugLink
                        to={`/cast/${cast.id}&${slugify(cast?.name || '', {
                            locale: 'vi',
                            lower: true,
                            strict: true,
                        })}`}
                        key={cast.id}
                    >
                        {cast.name}
                    </SlugLink>
                )),
        },
        {
            title: 'Nation',
            children: movieDetail?.production_countries?.[0]?.name,
        },
        {
            title: 'Genres',
            children: movieDetail?.genres?.map((genre) => (
                <SlugLink key={genre.id}>{genre.name}</SlugLink>
            )),
        },
        {
            title: 'Release',
            children: getDMY(new Date(movieDetail.release_date)),
        },
    ];

    return (
        <div className="flex flex-wrap mt-10">
            <Link
                to={`/movie/${slug}?id=${movieId}`}
                className="group relative w-4/12 lg:w-2/12 rounded-[5px] overflow-hidden aspect-[2/3]"
            >
                <Image
                    alt={movieDetail?.title || movieDetail?.name}
                    src={
                        movieDetail?.poster_path
                            ? config.movieDB.image + movieDetail?.poster_path
                            : config.imageBackup
                    }
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 ease-linear duration-[400ms]" />
            </Link>
            <div className="w-8/12 lg:w-6/12 pl-[15px] lg:pr-[15px] pr-0">
                <h3
                    className="mb-1 font-medium text-2xl"
                    title={movieDetail?.title || movieDetail?.name}
                >
                    {movieDetail?.title || movieDetail?.name}
                </h3>
                <p className="font-medium text-lg text-slate-500">
                    {movieDetail?.tagline}
                </p>
                <Button
                    onClick={handleToggleFavorites}
                    className={`w-[135px] mt-1 transition-all duration-[400ms] ${
                        favorites
                            ? 'bg-[linear-gradient(90deg,#ff3055,#fb685f)]'
                            : 'bg-[linear-gradient(90deg,#252728,#3f4143)]'
                    } text-white`}
                >
                    <HeartSolidIcon className="w-[18px] h-[18px]" />
                    <span>{favorites ? 'Followed' : 'Follow'}</span>
                </Button>
                <div className="mt-4">
                    <h4 className="font-semibold text-sm mb-2">Overview</h4>
                    <p
                        title={movieDetail?.overview}
                        className="text-justify text-sm text-slate-500 line-clamp-5"
                    >
                        {movieDetail?.overview}
                    </p>
                </div>
            </div>
            <div className="w-6/12 lg:w-4/12 pt-[15px] lg:pt-0 lg:px-[15px]">
                {movieInfoMenu.map((item) => {
                    if (
                        !item.children ||
                        (Array.isArray(item.children) &&
                            item.children.length <= 0)
                    )
                        return null;
                    return (
                        <div key={v4()} className="flex gap-[10px]">
                            <h5 className="w-2/5 sm:w-[30%] flex-shrink-0 font-bold text-sm pb-1">
                                {item.title}
                            </h5>
                            <span className="text-sm pb-1 flex-1">
                                {item.children}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MovieDetailsInfo;
