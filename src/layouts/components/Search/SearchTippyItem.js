import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '~/components/Avatar';
import config from '~/config';
import { useSlug } from '~/hooks';

const SearchTippyItem = ({ data, onClick = () => {} }) => {
    const slug = useSlug(data?.title || data?.name || '');
    const to = useMemo(() => {
        if (data.title) return `/movie/${slug}?id=${data?.id}`;
        if (data.name) return `/tv/${slug}?id=${data?.id}`;
        return '';
    }, [data?.id, data?.name, data?.title, slug]);

    if (!to) return null;

    return (
        <Link to={to} className="flex items-center py-[6px]" onClick={onClick}>
            <Avatar
                className="w-search-avatar h-search-avatar flex-shrink-0"
                alt={data?.title || data?.name}
                src={
                    data.backdrop_path || data.poster_path
                        ? `${config.movieDB.image}${
                              data.backdrop_path ?? data.poster_path
                          }`
                        : '/no-avatar.png'
                }
            />
            <h6 className="line-clamp-2 ml-3 text-sm leading-[1.6] text-[#292929]">
                {data?.title || data?.name}
            </h6>
        </Link>
    );
};

export default SearchTippyItem;
