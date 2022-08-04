import PropTypes from 'prop-types';
import { useLayoutEffect, useState } from 'react';
import { FreeMode, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMovieDetails } from '~/context/MovieDetails';
import { useTV } from '~/hooks';
import * as httpRequest from '~/utils/httpRequest';
import MovieBackdropItem from './MovieBackdropItem';

const MovieBackdropList = ({ className, children }) => {
    const { movieId } = useMovieDetails();
    const [similar, setSimilar] = useState([]);
    const isTV = useTV();

    useLayoutEffect(() => {
        async function getData() {
            try {
                const similar = await httpRequest.get(
                    `${isTV ? 'tv' : 'movie'}/similar?id=${movieId}`,
                );
                const arr = similar?.results?.slice(0, 12);
                setSimilar(arr);
            } catch (error) {
                console.log('🚀 ~ useLayoutEffect ~ error', error);
            }
        }

        getData();
    }, [isTV, movieId]);

    return (
        <>
            {similar?.length > 0 && (
                <div className={className}>
                    <h2 className="font-medium text-2xl mb-2">{children}</h2>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        freeMode={true}
                        scrollbar={{
                            hide: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            540: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Scrollbar, FreeMode]}
                    >
                        {similar?.map((item) => {
                            if (!item || !item.backdrop_path) return null;

                            return (
                                <SwiperSlide key={item.id}>
                                    <MovieBackdropItem data={item} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            )}
        </>
    );
};

MovieBackdropList.propTypes = {
    classMap: PropTypes.string,
    children: PropTypes.node,
};

export default MovieBackdropList;
