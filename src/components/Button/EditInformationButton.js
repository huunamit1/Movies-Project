import config from '~/config';
import { PencilIcon } from '~/components/Icons';
import Button from './Button';

const EditInformationButton = ({ className = '' }) => {
    return (
        <Button
            to={config.routes.personalInformationEdit}
            primary
            large
            className={className}
        >
            <PencilIcon className="w-5 h-5"></PencilIcon>
            Edit information
        </Button>
    );
};

export default EditInformationButton;
