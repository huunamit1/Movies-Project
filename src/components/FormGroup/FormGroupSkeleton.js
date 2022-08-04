import Skeleton from 'react-loading-skeleton';
import { CheckboxSkeleton } from '~/components/Checkbox';

const FormGroupSkeleton = ({ type }) => {
    return (
        <div className="flex flex-col gap-[11px]">
            <Skeleton
                containerClassName="flex w-[80px] h-5"
                className="h-full"
            />
            {(type === 'checkbox' && <CheckboxSkeleton />) || (
                <Skeleton
                    containerClassName="flex"
                    className="h-12 !rounded-full"
                />
            )}
        </div>
    );
};

export default FormGroupSkeleton;
