import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';
import LoadMore from '~/components/LoadMore';
import MoviesGrid, { MoviesGridSkeleton } from '~/components/MoviesGrid';
import { useBackToTop, useTV, useWindowDimensions } from '~/hooks';
import { PageNotFound } from '~/pages';
import * as httpRequest from '~/utils/httpRequest';

const CastDetailsPage = () => {
    const { castSlug, castId } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [hasMore, setHasMore] = useState(true);
    const isTV = useTV();
    const { width, height } = useWindowDimensions();
    const isMinSm = width >= 640;

    useBackToTop(castId);

    useEffect(() => {
        document.title = (castSlug ? castSlug + ' - ' : '') + 'WMovies';
    }, [castSlug]);

    useEffect(() => {
        async function getData() {
            setLoading(true);
            try {
                let limit = 9;
                if (width >= 1536) {
                    if (height >= 1400) limit = 20;
                    else limit = 12;
                } else {
                    if (height >= 1120) limit = 12;
                }
                const result = await httpRequest.get(
                    `/cast/${castId}/${isTV ? 'tv' : 'movies'}`,
                    {
                        params: {
                            page,
                            limit,
                        },
                    },
                );

                setMovies((movies) => [...movies, ...result?.cast]);
                setTotalPages(result?.total_pages);
            } catch (error) {
                console.error('🚀 ~ getData ~ error', error);
            } finally {
                setLoading(false);
            }
        }

        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [castId, height, isTV, page]);

    if (!loading && movies?.length <= 0 && !totalPages) return <PageNotFound />;

    const fetchMoreData = () => {
        if (page >= totalPages) {
            setHasMore(false);
            return;
        }

        setPage((page) => page + 1);
    };

    return (
        <div>
            {(loading && !totalPages && (
                <>
                    <Skeleton
                        baseColor="#c3c3c3"
                        containerClassName={`block ${
                            isMinSm ? 'px-10' : 'px-5'
                        } py-[113px] bg-slate-50`}
                        className={`${
                            isMinSm ? 'text-5xl' : 'text-3xl'
                        } leading-none`}
                    />
                    <MoviesGridSkeleton />
                </>
            )) || (
                <>
                    <header
                        className={`${
                            isMinSm ? 'px-10' : 'px-5'
                        } py-[113px] bg-slate-50 font-medium ${
                            isMinSm ? 'text-5xl' : 'text-3xl'
                        } leading-none text-center`}
                    >
                        {castSlug}
                    </header>
                    <InfiniteScroll
                        dataLength={movies.length}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={<LoadMore />}
                        scrollThreshold={height >= 1000 ? 0.5 : 0.8}
                    >
                        <MoviesGrid title="Participating movies">
                            {movies?.map((movie) => (
                                <MoviesGrid.Item
                                    data={movie}
                                    key={movie.id + movie.credit_id}
                                />
                            ))}
                        </MoviesGrid>
                    </InfiniteScroll>
                </>
            )}
        </div>
    );
};

export default CastDetailsPage;
