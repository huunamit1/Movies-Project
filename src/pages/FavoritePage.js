import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { v4 } from 'uuid';
import { CloseIcon } from '~/components/Icons';
import {
    MovieBackdropItem,
    MovieBackdropItemSkeleton,
} from '~/components/MovieBackdropList';
import RequestLogin from '~/components/RequestLogin';
import useAuth from '~/context/Auth';
import { useWindowDimensions } from '~/hooks';
import * as httpRequest from '~/utils/httpRequest';

const FavoritePage = () => {
    const { user, loading: loadingUser } = useAuth();
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { width } = useWindowDimensions();
    const isMinMd = width >= 768;

    useEffect(() => {
        async function getData() {
            setLoading(true);
            try {
                const [movies, tvs] = await Promise.all([
                    httpRequest.get(`user/${user.uid}/favorites-movie-list`),
                    httpRequest.get(`user/${user.uid}/favorites-tv-list`),
                ]);

                const moviesLength = movies?.list?.length ?? 0;
                const movieList = Array.isArray(movies?.list)
                    ? movies.list.map((movieId) =>
                          httpRequest.get(`movie/${movieId}`),
                      )
                    : [];
                const tvList = Array.isArray(tvs?.list)
                    ? tvs.list.map((tvId) => httpRequest.get(`tv/${tvId}`))
                    : [];

                const result = await Promise.all([...movieList, ...tvList]);

                setMovieList(
                    result.map((item, index) => {
                        if (index < moviesLength)
                            return {
                                ...item,
                                type: 'movie',
                            };
                        return {
                            ...item,
                            type: 'tv',
                        };
                    }),
                );
            } catch (error) {
                console.log('🚀 ~ getData ~ error', error);
            } finally {
                setLoading(false);
            }
        }

        if (user?.uid) getData();
    }, [user?.uid]);

    if (!user && !loadingUser) return <RequestLogin />;

    const handleClickFavorite = (event, id, type) => {
        event.preventDefault();
        setMovieList((movieList) =>
            movieList.filter((movie) => movie.id !== id || movie.type !== type),
        );
        httpRequest
            .post(`/user/${user?.uid}/favorites-${type}?${type}Id=${id}`)
            .then()
            .catch((error) => toast.error(error.message));
    };

    return (
        <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ${
                isMinMd ? 'gap-x-[30px]' : 'gap-x-[15px]'
            } gap-y-[10px]`}
        >
            {(loading &&
                new Array(6)
                    .fill(null)
                    .map(() => <MovieBackdropItemSkeleton key={v4()} />)) ||
                movieList.map((movie) => (
                    <MovieBackdropItem
                        render={
                            <div className="group-hover:bg-opacity-20 transition-all absolute inset-0 bg-black bg-opacity-0">
                                <button
                                    onClick={(e) =>
                                        handleClickFavorite(
                                            e,
                                            movie.id,
                                            movie.type,
                                        )
                                    }
                                    className="transition-all absolute top-[5px] right-2 flex items-center justify-center w-[22px] h-[22px] text-white bg-[rgba(0,0,0,.61961)] opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:text-red-600"
                                >
                                    <CloseIcon className="w-[14px] h-[14px]" />
                                </button>
                            </div>
                        }
                        data={movie}
                        key={movie.id}
                    />
                ))}
        </div>
    );
};

export default FavoritePage;
