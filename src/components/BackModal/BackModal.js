import PropTypes from 'prop-types';
import { ChevronLeftIcon } from '~/components/Icons';

const BackModal = ({ isShowBack, children, onBack = () => {} }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[url(https://www.cantechletter.com/wp-content/uploads/Netflix.jpg)] bg-center bg-cover">
            <div className="relative m-4 px-4 py-12 w-full max-w-[640px] bg-white rounded-lg">
                {isShowBack && (
                    <span
                        onClick={onBack}
                        className="cursor-pointer absolute top-0 left-0 flex items-center justify-center w-[70px] h-[70px]"
                    >
                        <ChevronLeftIcon width="20px" height="20px" />
                    </span>
                )}

                {children}
            </div>
        </div>
    );
};

BackModal.propTypes = {
    isShowBack: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onBack: PropTypes.func,
};

export default BackModal;
