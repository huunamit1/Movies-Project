import { useSearchParams } from 'react-router-dom';
import { v4 } from 'uuid';
import { useMovieDetails } from '~/context/MovieDetails';
import EpisodeItem from './EpisodeItem';

const Episode = () => {
    const { movieDetail } = useMovieDetails();
    const [params] = useSearchParams();
    const episode = params.get('episode') ?? 1;

    return (
        <div className="mt-12">
            <h3 className="font-medium text-[25px] leading-[1.2]">Episode</h3>
            <div className="mt-[25px] grid grid-cols-4 lg:grid-cols-6 gap-x-[30px] gap-y-[15px]">
                {new Array(Math.min(movieDetail.number_of_episodes, 18))
                    .fill(null)
                    .map((item, index) => (
                        <EpisodeItem
                            isActive={+episode === index + 1}
                            key={v4()}
                        >
                            {index + 1}
                        </EpisodeItem>
                    ))}
            </div>
        </div>
    );
};

export default Episode;
