import { useSearchParams } from 'react-router-dom';
import { v4 } from 'uuid';
import { useMovieDetails } from '~/context/MovieDetails';
import SeasonsItem from './SeasonsItem';

const Seasons = () => {
    const { movieDetail } = useMovieDetails();
    const [params] = useSearchParams();
    const seasons = params.get('seasons') ?? 1;

    return (
        <div className="mt-12">
            <h3 className="font-medium text-[25px] leading-[1.2]">Seasons</h3>
            <div className="mt-[25px] grid grid-cols-4 lg:grid-cols-6 gap-x-[30px] gap-y-[15px]">
                {new Array(Math.min(movieDetail.number_of_seasons, 18))
                    .fill(null)
                    .map((item, index) => (
                        <SeasonsItem
                            isActive={+seasons === index + 1}
                            key={v4()}
                        >
                            {index + 1}
                        </SeasonsItem>
                    ))}
            </div>
        </div>
    );
};

export default Seasons;
