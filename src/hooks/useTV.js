import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const useTV = () => {
    const location = useLocation();
    const isTV = useMemo(
        () => /\/tv.*/.test(location.pathname),
        [location.pathname],
    );
    return isTV;
};

export default useTV;
