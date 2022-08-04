import { Link, useNavigate } from 'react-router-dom';
import { useBackToTop } from '~/hooks';

const PageNotFound = () => {
    const navigate = useNavigate();

    useBackToTop();

    return (
        <section className="min-h-screen max-w-5xl py-10 flex items-center justify-center bg-white font-['Arvo',_serif]">
            <div className="container mx-auto">
                <div className="col-sm-10 col-sm-offset-1  text-center">
                    <div className="bg-404-page h-[400px] bg-center">
                        <h1 className="text-[80px]">404</h1>
                    </div>

                    <div className="-mt-[50px] px-8">
                        <h3 className="text-4xl xs:text-[80px] xs:leading-tight">
                            Look like you're lost
                        </h3>

                        <p>the page you are looking for not avaible!</p>

                        <div className="flex items-center justify-center gap-4">
                            <Link
                                to="/"
                                className="text-white rounded-xl overflow-hidden py-[10px] inline-block my-5 px-5 bg-[#39ac31]"
                            >
                                Go to Home
                            </Link>
                            <button
                                onClick={() => navigate(-1)}
                                className="text-white rounded-xl overflow-hidden py-[10px] inline-block my-5 px-5 bg-[#39ac31]"
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageNotFound;
