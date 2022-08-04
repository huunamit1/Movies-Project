import { useEffect, useState } from 'react';
import MovieGlass from '~/components/MovieGlass';
import MovieList from '~/components/MovieList';
import useAuth from '~/context/Auth';
import Banner from '~/layouts/DefaultLayout/Banner';
import * as httpRequest from '~/utils/httpRequest';

const TVPage = () => {
    const [recentlyViewed, setRecentlyViewed] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        document.title = 'WMovies';
    }, []);

    useEffect(() => {
        async function getData() {
            try {
                const result = await httpRequest.get(
                    `user/${user.uid}/recently-viewed?type=tv`,
                );

                const data = result.map((tvId) =>
                    httpRequest.get(`tv/${tvId}`),
                );

                const tvList = await Promise.all(data);

                setRecentlyViewed(tvList ?? []);
            } catch (error) {
                console.log('🚀 ~ getData ~ error', error);
            }
        }

        if (user?.uid) getData();
    }, [user?.uid]);

    return (
        <div>
            <Banner url="tv/banner" />
            {recentlyViewed?.length > 0 && (
                <div className="mt-10">
                    <header className="mb-4 flex gap-5 justify-between items-center">
                        <h1 className="font-black text-2xl leading-sm">
                            Recently Viewed
                        </h1>
                    </header>
                    <MovieGlass data={recentlyViewed} />
                </div>
            )}
            <MovieList className="mt-10" type="top_rated">
                Top Rated
            </MovieList>
            <MovieList movieUi="glass" className="mt-10" type="popular">
                Popular
            </MovieList>
        </div>
    );
};

export default TVPage;
