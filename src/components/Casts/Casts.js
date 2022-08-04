import { memo, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMovieDetails } from '~/context/MovieDetails';
import Cast from './Cast';

const Casts = () => {
    const { credits } = useMovieDetails();
    const casts = useMemo(() => {
        const acting = credits.cast.filter(
            (item) => item.known_for_department === 'Acting',
        );
        return acting?.slice(0, 12) || [];
    }, [credits.cast]);

    return (
        <div>
            <h3 className="mb-6 font-medium text-[22px] leading-tight">
                Casts
            </h3>
            <Swiper slidesPerView={'auto'} spaceBetween={10}>
                {casts?.map((cast) => (
                    <SwiperSlide key={cast.id} className="!w-auto">
                        <Cast data={cast} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default memo(Casts);
