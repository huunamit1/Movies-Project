import { useSelect } from './Select';

const Option = ({ children, value: valueProp, onClick }) => {
    const { setLabel, setValue } = useSelect();

    return (
        <div
            onClick={() => {
                setValue(valueProp);
                setLabel(children);
                onClick?.();
            }}
            className="px-3 py-2 text-sm"
        >
            {children}
        </div>
    );
};

export default Option;
