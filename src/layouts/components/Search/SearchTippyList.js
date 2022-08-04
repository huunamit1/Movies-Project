import { Link } from 'react-router-dom';
import SearchTippyItem from './SearchTippyItem';
import PropTypes from 'prop-types';

const SearchTippyList = ({
    isTV,
    children,
    data,
    value,
    handleResetSearch,
}) => {
    if (data?.length <= 0) return null;

    return (
        <div>
            <div className="flex justify-between items-center pt-5 pb-3 mb-[6px] border-b border-[rgba(0,0,0,.05)]">
                <h4 className="text-[#333] text-sm leading-sm font-medium uppercase">
                    {children}
                </h4>
                <Link
                    onClick={handleResetSearch}
                    className="text-desc text-sm leading-sm transition-all hover:text-primary"
                    to={`${isTV ? '/tv' : ''}/search?q=${value}`}
                >
                    See more
                </Link>
            </div>
            {data.map((item) => (
                <SearchTippyItem
                    onClick={handleResetSearch}
                    key={item.id}
                    data={item}
                />
            ))}
        </div>
    );
};

SearchTippyList.propTypes = {
    isTV: PropTypes.bool,
    children: PropTypes.node,
    data: PropTypes.array,
    value: PropTypes.string,
    handleResetSearch: PropTypes.func,
};

export default SearchTippyList;
