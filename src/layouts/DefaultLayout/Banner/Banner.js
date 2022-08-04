import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 } from 'uuid';
import { useWindowDimensions } from '~/hooks';
import * as httpRequest from '~/utils/httpRequest';
import BannerItem from './BannerItem';
import BannerItemSkeleton from './BannerItemSkeleton';

const Banner = ({ url }) => {
    const [banner, setBanner] = useState([]);
    const { width } = useWindowDimensions();
    const isShowPagination = width > 738;

    useEffect(() => {
        async function getData() {
            const index = [];
            const result = await httpRequest.get(url, {
                params: {
                    page: Math.floor(Math.random() * 10) || 1,
                },
            });
            const length = result?.results?.length ?? 0;

            while (index.length < Math.min(4, length)) {
                const rand = Math.floor(Math.random() * length);

                if (!index.includes(rand)) index.push(rand);
            }

            setBanner(index.map((item) => result.results[item]));
        }

        getData();
    }, [url]);

    return (
        <div className="banner-wrapper">
            {(banner?.length > 0 && (
                <Swiper
                    className="banner-swiper"
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={isShowPagination}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop
                >
                    {banner?.map((item) => (
                        <SwiperSlide key={item.id}>
                            <BannerItem data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )) || (
                <>
                    <BannerItemSkeleton />
                    <div className="flex gap-[10px] mt-7">
                        {new Array(4).fill(null).map((item, index) => (
                            <Skeleton
                                key={v4()}
                                containerClassName="flex"
                                width={index === 0 ? '50px' : '32px'}
                                height="8px"
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

Banner.propTypes = {
    url: PropTypes.string,
};

export default Banner;
