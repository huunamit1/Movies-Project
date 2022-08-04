import React from 'react';
import { useSelect } from './Select';

const Label = ({ children }) => {
    const { label } = useSelect();

    return <div className="text-sm">{label || children}</div>;
};

export default Label;
