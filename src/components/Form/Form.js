import PropTypes from 'prop-types';
import { FormProvider } from '~/context/Form';

const Form = ({ className = '', children, onSubmit, cols = 1 }) => {
    return (
        <FormProvider value={{ cols }}>
            <form
                onSubmit={onSubmit}
                className={`grid gap-3 mx-auto ${className}`}
            >
                {children}
            </form>
        </FormProvider>
    );
};

Form.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    cols: PropTypes.number,
    onSubmit: PropTypes.func,
};

export default Form;
