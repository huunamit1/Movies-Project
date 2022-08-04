import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useState, useTransition } from 'react';
import { SearchIcon, SpinnerIcon } from '~/components/Icons';
import Popup from '~/components/Popup';
import { useDebounce, useWindowDimensions } from '~/hooks';
import * as httpRequest from '~/utils/httpRequest';
import styles from './Search.module.scss';
import SearchTippyList from './SearchTippyList';

const cx = classNames.bind(styles);

const SearchTippy = ({ value, handleResetSearch = () => {}, ...props }) => {
    const valueDebounce = useDebounce(value, 500);
    const [movie, setMovie] = useState([]);
    const [tv, setTV] = useState([]);
    const [loading, setLoading] = useState(false);
    const [, startTransition] = useTransition();
    const { width } = useWindowDimensions();
    const isTablet = width <= 738;

    useEffect(() => {
        if (!value) {
            setMovie([]);
            setTV([]);
        }
    }, [value]);

    useEffect(() => {
        setLoading(true);
        startTransition(async () => {
            if (valueDebounce)
                try {
                    const [resMovie, resTV] = await httpRequest.get('/search', {
                        params: { query: `'${valueDebounce}'` },
                    });
                    setMovie(resMovie?.results.slice(0, 5));
                    setTV(resTV?.results.slice(0, 5));
                } catch (error) {
                    console.error(error);
                } finally {
                    setLoading(false);
                }
        });
    }, [valueDebounce]);

    return (
        <Popup {...props}>
            <div
                className={`${cx('search-tippy')} ${
                    isTablet
                        ? 'left-0 w-[calc(100vw-32px)] max-w-search'
                        : 'w-search'
                } min-h-[50px] max-h-[calc(90vh-66px)] overflow-overlay py-3 px-6`}
            >
                <div className="h-[26px] flex text-[#757575] items-center text-sm leading-sm">
                    {(loading && (
                        <SpinnerIcon
                            className="animate-spin"
                            width="14px"
                            height="14px"
                        />
                    )) || (
                        <SearchIcon
                            className="flex-shrink-0"
                            width="14px"
                            height="14px"
                        ></SearchIcon>
                    )}
                    <span className="ml-2 text-desc">
                        {(loading && 'Find') ||
                            ((movie.length > 0 || tv.length > 0) &&
                                'Results for') ||
                            'No results for'}
                        &nbsp;'{value}'
                    </span>
                </div>
                <SearchTippyList
                    data={movie}
                    value={value}
                    handleResetSearch={handleResetSearch}
                >
                    Movies
                </SearchTippyList>
                <SearchTippyList
                    data={tv}
                    value={value}
                    handleResetSearch={handleResetSearch}
                    isTV
                >
                    TV
                </SearchTippyList>
            </div>
        </Popup>
    );
};

SearchTippy.propTypes = {
    value: PropTypes.string.isRequired,
};

export default SearchTippy;
