const PersonalInformationItem = ({ children, icon }) => {
    const Icon = icon;

    return (
        <div className="flex gap-[15px] p-[15px] bg-slate-200 rounded-[10px]">
            <Icon className="flex-shrink-0 text-[#4a4a4a] w-[35px] h-[35px]"></Icon>
            <div>{children}</div>
        </div>
    );
};

export default PersonalInformationItem;
