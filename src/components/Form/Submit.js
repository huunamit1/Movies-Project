import useForm from '~/context/Form';
import Button from '~/components/Button';

const Submit = ({ children, className = '', ...props }) => {
    const { cols } = useForm();

    return (
        <div className={`sm:col-start-1 sm:col-end-${cols + 1}`}>
            <Button {...props} large className={`mx-auto ${className}`} primary>
                {children}
            </Button>
        </div>
    );
};

export default Submit;
