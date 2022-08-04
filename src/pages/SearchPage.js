import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSearchParams } from 'react-router-dom';
import { v4 } from 'uuid';
import { MovieBackdropItem } from '~/components/MovieBackdropList';
import MovieBackdropItemSkeleton from '~/components/MovieBackdropList/MovieBackdropItemSkeleton';
import Paginate from '~/components/Paginate';
import { useBackToTop, useTV } from '~/hooks';
import * as httpRequest from '~/utils/httpRequest';

const SearchPage = () => {
    const [params] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [pageCount, setPageCount] = useState();
    const [page, setPage] = useState(1);
    const isTV = useTV();

    const value = params.get('q');

    useEffect(() => {
        async function getData() {
            const result = await httpRequest.get('/search', {
                params: { query: `'${value ?? ''}'`, page },
            });
            const res = result[isTV ? 1 : 0];

            if (!res?.results) return;
            setMovies(res?.results);
            setPageCount(res?.total_pages);
        }

        getData();
    }, [isTV, page, value]);

    useBackToTop(page, value);

    const handlePageClick = (e) => setPage(e.selected + 1);

    return (
        <div>
            <h1 className="mb-5 text-xl">Results for "{value}"</h1>
            <div className="grid grid-cols-1 xxs:grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 gap-[10px] sm:gap-5">
                {(movies?.length > 0 &&
                    movies?.map((movie) => (
                        <MovieBackdropItem data={movie} key={movie.id} />
                    ))) ||
                    new Array(8)
                        .fill(null)
                        .map(() => <MovieBackdropItemSkeleton key={v4()} />)}
            </div>
            {(movies?.length > 0 && pageCount && (
                <Paginate
                    handlePageClick={handlePageClick}
                    pageCount={pageCount}
                />
            )) || (
                <div className="flex items-center justify-center ">
                    <Skeleton width="54px" height="54px" />
                </div>
            )}
        </div>
    );
};

export default SearchPage;
