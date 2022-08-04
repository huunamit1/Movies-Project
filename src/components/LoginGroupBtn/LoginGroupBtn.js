const LoginGroupBtn = ({ className = '', children }) => {
    return (
        <div className={`flex flex-col items-center gap-[14px] ${className}`}>
            {children}
        </div>
    );
};

export default LoginGroupBtn;
