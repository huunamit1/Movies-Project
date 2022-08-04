import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '~/components/Button';
import Form from '~/components/Form';
import FormGroup from '~/components/FormGroup';
import Input from '~/components/Input';
import Label from '~/components/Label';
import config from '~/config';
import { auth } from '~/firebase/firebaseConfig';

const LoginWithEmail = () => {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm();
    const navigate = useNavigate();

    const handleValid = async (values) => {
        try {
            await signInWithEmailAndPassword(
                auth,
                values.email,
                values.password,
            );
            toast.success('Login successfully!');
            navigate(config.routes.home);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <Form
            onSubmit={handleSubmit(handleValid)}
            className="w-full max-w-[380px]"
        >
            <FormGroup>
                <Label htmlFor="email">Email Address</Label>
                <Input
                    control={control}
                    name="email"
                    placeholder="Email address"
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                    control={control}
                    type="password"
                    name="password"
                    placeholder="Password"
                />
            </FormGroup>
            <Button isLoading={isSubmitting} className="w-full" large primary>
                Login
            </Button>
        </Form>
    );
};

export default LoginWithEmail;
