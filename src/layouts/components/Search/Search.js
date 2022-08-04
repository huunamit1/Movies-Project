import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { memo, useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CloseIcon, SearchIcon } from '~/components/Icons';
import { useWindowDimensions } from '~/hooks';
import styles from './Search.module.scss';
import SearchTippy from './SearchTippy';

const cx = classNames.bind(styles);

const Search = ({ isActive }) => {
    const [searchValue, setSearchValue] = useState('');
    const [isShow, setShow] = useState(true);
    const inputRef = useRef();
    const location = useLocation();
    const { width } = useWindowDimensions();
    const isTablet = width <= 739;

    useLayoutEffect(() => {
        setShow(false);
    }, [location]);

    useLayoutEffect(() => {
        if (isActive) inputRef.current?.focus();
    }, [isActive]);

    const handleResetSearch = () => setSearchValue('');

    return (
        <div
            className={
                isTablet
                    ? `${
                          isActive
                              ? 'visible opacity-100'
                              : 'invisible opacity-0 -translate-y-full'
                      } shadow-md p-4 absolute top-[calc(var(--header-pc-height)-1px)] left-0 w-full -z-10 bg-white transition-all duration-300`
                    : 'relative'
            }
        >
            <Tippy
                interactive
                visible={!!searchValue && isShow}
                placement="bottom"
                onClickOutside={() => setShow(false)}
                render={(attrs) => (
                    <SearchTippy
                        handleResetSearch={handleResetSearch}
                        value={searchValue}
                        {...attrs}
                    />
                )}
            >
                <div
                    className={`focus-within:border-[#444] transition-all duration-300 ${
                        isTablet ? 'mx-auto max-w-search w-full' : 'w-search'
                    } h-search flex flex-row-reverse items-center border-2 border-[#e8e8e8] rounded-full overflow-hidden`}
                >
                    {searchValue && (
                        <span
                            onClick={() => {
                                setSearchValue('');
                            }}
                            className="cursor-pointer text-[#7b7b7b] p-2"
                        >
                            <CloseIcon width="20px" height="20px"></CloseIcon>
                        </span>
                    )}
                    <input
                        ref={inputRef}
                        className={`${cx(
                            'search-input',
                        )} text-sm leading-[1.15] search__input px-2 h-full flex-1 outline-none border-0`}
                        type="text"
                        placeholder="Search movies..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShow(true)}
                    />
                    <span
                        className={`${cx(
                            'search-icon',
                        )} cursor-pointer flex items-center px-2 h-full text-[#7c7c7c]`}
                    >
                        <SearchIcon width="20px" height="20px"></SearchIcon>
                    </span>
                </div>
            </Tippy>
        </div>
    );
};

export default memo(Search);
