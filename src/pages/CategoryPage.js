import { useEffect, useLayoutEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';
import { v4 } from 'uuid';
import MovieIemSkeleton from '~/components/MovieList/MovieIemSkeleton';
import MovieItem from '~/components/MovieList/MovieItem';
import Paginate from '~/components/Paginate';
import { useBackToTop } from '~/hooks';
import * as httpRequest from '~/utils/httpRequest';
import PageNotFound from './PageNotFound';

const CategoryPage = () => {
    const params = useParams();
    const [category, setCategory] = useState();
    const [movies, setMovies] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const handlePageClick = (e) => {
        setPage(e.selected + 1);
    };

    useLayoutEffect(() => {
        async function getData() {
            setLoading(true);
            try {
                const result = await httpRequest.get(
                    `category/${params.category}`,
                );
                if (!result) return;
                setCategory({
                    name: result.name,
                    type: result.type,
                });
            } catch (error) {
                console.error('🚀 ~ getData ~ error', error);
            } finally {
                setLoading(false);
            }
        }

        if (params?.category) getData();
    }, [params?.category]);

    useBackToTop(page);

    useEffect(() => {
        async function getData() {
            try {
                const result = await httpRequest.get(`movie/${category.type}`, {
                    params: { page },
                });
                setPageCount(Math.min(result?.total_pages, 500) ?? 0);
                setMovies(result?.results ?? []);
            } catch (error) {
                console.log('🚀 ~ getData ~ error', error);
            }
        }

        if (category?.type) getData();
    }, [category?.type, page]);

    if (!params?.category || (!category && !loading)) return <PageNotFound />;

    return (
        <div className="max-w-7xl mx-auto mt-[calc(var(--header-pc-height)+20px)] mb-24">
            {(movies?.length > 0 && (
                <>
                    <header className="flex justify-center items-center h-24 bg-slate-400 text-white">
                        <h1 className="p-6 font-medium text-[28px] leading-tight">
                            {category.name}
                        </h1>
                    </header>
                    <div
                        className={`px-3 lg:px-10 xl:px-0 xs:px-5 mt-4 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[10px]`}
                    >
                        {movies?.map((movie) => (
                            <MovieItem
                                className="flex flex-col"
                                hoverImage={false}
                                rounded="5px"
                                key={movie.id}
                                data={movie}
                            />
                        ))}
                    </div>
                    <Paginate
                        className="mt-12"
                        pageCount={pageCount}
                        handlePageClick={handlePageClick}
                    />
                </>
            )) || (
                <>
                    <header className="flex justify-center items-center h-24 bg-slate-400 text-white">
                        <Skeleton
                            containerClassName="p-6 w-[230px]"
                            className="text-[28px] leading-tight"
                        />
                    </header>
                    <div
                        className={`px-3 lg:px-10 xl:px-0 xs:px-5 mt-4 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[10px]`}
                    >
                        {new Array(10).fill(null).map(() => (
                            <MovieIemSkeleton key={v4()} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default CategoryPage;
