import { useLocation, useSearchParams } from 'react-router-dom';

const useLocationTV = () => {
    const location = useLocation();
    const [params] = useSearchParams();
    const episode = params.get('episode') ?? 1;
    const seasons = params.get('seasons') ?? 1;
    const id = params.get('id') ?? 1;

    return {
        id,
        episode,
        seasons,
        pathname: location.pathname,
    };
};

export default useLocationTV;
