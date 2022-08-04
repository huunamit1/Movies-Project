import { useEffect, useLayoutEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Casts, { CastsSkeleton } from '~/components/Casts';
import Episode from '~/components/Episode';
import GridButtonSkeleton from '~/components/GridButtonSkeleton';
import MovieBackdropList, {
    MovieBackdropListSkeleton,
} from '~/components/MovieBackdropList';
import MovieDetailsInfo, {
    MovieDetailsInfoSkeleton,
} from '~/components/MovieDetailsInfo';
import MovieDetailsReviews, {
    MovieDetailsReviewsSkeleton,
} from '~/components/MovieDetailsReviews';
import Seasons from '~/components/Seasons';
import Video, { VideoSkeleton } from '~/components/Video';
import useAuth from '~/context/Auth';
import MovieDetailsProvider from '~/context/MovieDetails';
import { useBackToTop, useTV } from '~/hooks';
import PageNotFound from '~/pages/PageNotFound';
import * as httpRequest from '~/utils/httpRequest';

const MovieDetailPage = () => {
    const { user } = useAuth();
    const { slug } = useParams();
    const [params] = useSearchParams();
    const [movieDetail, setMovieDetail] = useState();
    const [credits, setCredits] = useState();
    const [loading, setLoading] = useState(true);
    const isTV = useTV();

    const movieId = params.get('id');

    useBackToTop(movieId);

    useEffect(() => {
        async function postData() {
            try {
                await httpRequest.post(`user/${user.uid}/recently-viewed`, {
                    type: isTV ? 'tv' : 'movie',
                    id: movieId,
                });
            } catch (error) {
                console.log('🚀 ~ postData ~ error', error);
            }
        }

        if (user?.uid && movieDetail) postData();
    }, [isTV, movieDetail, movieId, user?.uid]);

    useLayoutEffect(() => {
        document.title = movieDetail?.title || 'WMovies';
    }, [movieDetail]);

    useLayoutEffect(() => {
        async function getData() {
            setLoading(true);
            try {
                const [movieDetail, credits] = await Promise.all([
                    httpRequest.get(`/${isTV ? 'tv' : 'movie'}/${movieId}`),
                    httpRequest.get(`/${isTV ? 'tv' : 'movie'}/credits`, {
                        params: {
                            id: movieId,
                        },
                    }),
                ]);

                setMovieDetail(movieDetail);
                setCredits(credits);
            } catch (error) {
                console.log('🚀 ~ getData ~ error', error);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, [isTV, movieId]);

    if (!slug || !movieId) return <PageNotFound />;
    if (!loading && !movieDetail && !credits) return <PageNotFound />;

    return (
        <>
            {(loading && (
                <>
                    <VideoSkeleton />
                    {isTV && (
                        <>
                            <GridButtonSkeleton />
                            <GridButtonSkeleton />
                        </>
                    )}
                    <MovieDetailsInfoSkeleton />
                    <MovieDetailsReviewsSkeleton className="mb-12" />
                    <MovieBackdropListSkeleton className="mb-6" />
                    <CastsSkeleton />
                </>
            )) || (
                <MovieDetailsProvider
                    value={{
                        slug,
                        movieDetail,
                        credits,
                        movieId,
                    }}
                >
                    <Video />
                    {isTV && (
                        <>
                            <Episode />
                            <Seasons />
                        </>
                    )}
                    <MovieDetailsInfo />
                    <MovieDetailsReviews className="mb-12" />
                    <MovieBackdropList className="mb-6">
                        Similar Movies
                    </MovieBackdropList>
                    <Casts />
                </MovieDetailsProvider>
            )}
        </>
    );
};

export default MovieDetailPage;
