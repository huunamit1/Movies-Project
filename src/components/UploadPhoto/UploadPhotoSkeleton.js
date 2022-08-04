import Skeleton from 'react-loading-skeleton';

const UploadPhotoSkeleton = () => {
    return (
        <label className="rounded-full w-36 h-36 p-2 border border-dashed border-[rgba(145,_158,_171,_0.32)]">
            <Skeleton
                containerClassName="w-full h-full flex"
                className="w-full h-full !rounded-full"
            />
        </label>
    );
};

export default UploadPhotoSkeleton;
