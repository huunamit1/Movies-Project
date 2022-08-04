import { createContext, useContext, useRef, useState } from 'react';
import { SortIcon } from '~/components/Icons';
import { useOnClickOutside } from '~/hooks';
import Label from './Label';
import Options from './Options';

const SelectContext = createContext();

function SelectProvider(props) {
    const [label, setLabel] = useState();
    const [value, setValue] = useState();

    return (
        <SelectContext.Provider
            value={{
                label,
                setLabel,
                value,
                setValue,
            }}
            {...props}
        />
    );
}

export const useSelect = () => {
    return useContext(SelectContext);
};

const Select = ({ children, placeholder = '' }) => {
    const [show, setShow] = useState(false);
    const selectRef = useRef();

    useOnClickOutside(selectRef, () => setShow(false));

    return (
        <SelectProvider>
            <div
                ref={selectRef}
                onClick={() => setShow(!show)}
                className="relative min-w-[144px] py-2 px-3 bg-white rounded-2xl cursor-pointer select-none"
            >
                <div className="flex items-center justify-between">
                    <Label>{placeholder}</Label>
                    <SortIcon className="w-4 h-4 fill-slate-400" />
                </div>
                {show && <Options children={children} />}
            </div>
        </SelectProvider>
    );
};

export default Select;
