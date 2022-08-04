const Description = ({ children }) => {
    return (
        <p className="text-[#222] font-bold text-base line-clamp-1">
            {children ?? '(Not update)'}
        </p>
    );
};

export default Description;
