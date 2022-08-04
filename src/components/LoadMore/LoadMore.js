const LoadMore = () => {
    return (
        <div className="flex justify-center">
            <div className="relative w-[60px] h-[60px] rounded-full inline-block align-middle">
                <svg
                    className="absolute top-[calc(50%-30px)] left-[calc(50%-30px)] w-[60px] h-[60px] scale-[0.7] animate-loader-start"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                >
                    <polygon
                        points="29.8 0.3 22.8 21.8 0 21.8 18.5 35.2 11.5 56.7 29.8 43.4 48.2 56.7 41.2 35.1 59.6 21.8 36.8 21.8 "
                        fill="#18ffff"
                    />
                </svg>
                <div className="w-2 h-2 bg-[#18ffff] rounded-full absolute left-[calc(50%-4px)] top-[calc(50%-4px)] transition-all duration-1000 ease-ease animate-loader-circles"></div>
            </div>
        </div>
    );
};

export default LoadMore;
