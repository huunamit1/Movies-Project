import { useEffect, useState } from 'react';
import MovieGlass from '~/components/MovieGlass';
import MovieList from '~/components/MovieList';
import useAuth from '~/context/Auth';
import Banner from '~/layouts/DefaultLayout/Banner';
import * as httpRequest from '~/utils/httpRequest';

// TODO Recently viewed

const HomePage = () => {
    const [recentlyViewed, setRecentlyViewed] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        document.title = 'WMovies';
    }, []);

    useEffect(() => {
        async function getData() {
            try {
                const result = await httpRequest.get(
                    `user/${user.uid}/recently-viewed?type=movie`,
                );

                const data = result.map((movieId) =>
                    httpRequest.get(`movie/${movieId}`),
                );

                const movieList = await Promise.all(data);

                setRecentlyViewed(movieList ?? []);
            } catch (error) {
                console.log('🚀 ~ getData ~ error', error);
            }
        }

        if (user?.uid) getData();
    }, [user?.uid]);

    return (
        <div>
            <Banner url="banner" />
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
            <MovieList className="mt-10" type="now_playing">
                Now Playing
            </MovieList>
            <MovieList movieUi="glass" className="mt-10" type="upcoming">
                Upcoming
            </MovieList>
            <MovieList className="mt-10" type="top_rated">
                Top Rated
            </MovieList>
            <MovieList movieUi="glass" className="mt-10" type="popular">
                Popular
            </MovieList>
        </div>
    );
};

export default HomePage;
