import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';
import { CheckIcon } from '~/components/Icons';

const Checkbox = ({ children, className = '', control, name, value }) => {
    const { field } = useController({ control, name, defaultValues: value });

    return (
        <label
            className={`${className} w-fit flex items-center gap-2 select-none cursor-pointer`}
        >
            <div
                className={`flex items-center justify-center w-[30px] h-[30px] ${
                    field.value
                        ? 'text-white bg-primary'
                        : 'text-[rgba(22,24,35,.06)] bg-[rgba(22,24,35,.06)]'
                } rounded`}
            >
                <input type="checkbox" className="hidden" {...field} />
                <CheckIcon className="w-[25px] h-[25px]" />
            </div>
            <span className="font-medium text-sm">{children}</span>
        </label>
    );
};

Checkbox.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    control: PropTypes.object,
    name: PropTypes.string,
    value: PropTypes.bool,
};

export default Checkbox;
