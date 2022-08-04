import Skeleton from 'react-loading-skeleton';

const CheckboxSkeleton = ({ className }) => {
    return (
        <label
            className={`${className} w-fit flex items-center gap-2 select-none cursor-pointer`}
        >
            <Skeleton containerClassName="flex w-[30px]" className="h-[30px]" />
            <Skeleton
                containerClassName="flex w-[50px]"
                className="!leading-5"
            />
        </label>
    );
};

export default CheckboxSkeleton;
