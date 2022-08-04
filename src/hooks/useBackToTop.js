import { useEffect } from 'react';

function useBackToTop(...props) {
    useEffect(() => {
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, props);
}

export default useBackToTop;
