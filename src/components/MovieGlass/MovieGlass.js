import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import MovieGlassItem from './MovieGlassItem';
import MovieGlassSkeleton from './MovieGlassSkeleton';

const MovieGlass = ({ data = [] }) => {
    return (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
            {(data?.length > 0 &&
                data?.map((movie) => (
                    <MovieGlassItem key={movie.id} data={movie} />
                ))) ||
                new Array(8)
                    .fill(null)
                    .map(() => <MovieGlassSkeleton key={v4()} />)}
        </div>
    );
};

MovieGlass.propTypes = {
    data: PropTypes.array,
};

export default MovieGlass;
