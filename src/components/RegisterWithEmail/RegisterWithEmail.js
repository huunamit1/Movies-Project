import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '~/components/Button';
import Form from '~/components/Form';
import FormGroup from '~/components/FormGroup';
import Input from '~/components/Input';
import Label from '~/components/Label';
import config from '~/config';
import { auth, db } from '~/firebase/firebaseConfig';

const RegisterWithEmail = () => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { isSubmitting },
    } = useForm();
    const navigate = useNavigate();

    const handleValid = async (values) => {
        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password,
            );

            await setDoc(doc(db, 'users', user.uid), {
                ...values,
                createdAt: serverTimestamp(),
                provider: 'email',
            });

            reset();
            toast.success('User created successfully');
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
                <Label htmlFor="email">Your name?</Label>
                <Input
                    control={control}
                    name="name"
                    placeholder="Your name"
                ></Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="email">Email Address</Label>
                <Input
                    control={control}
                    name="email"
                    placeholder="Email address"
                ></Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                    control={control}
                    type="password"
                    name="password"
                    placeholder="Password"
                ></Input>
            </FormGroup>
            <Button isLoading={isSubmitting} className="w-full" large primary>
                Register
            </Button>
        </Form>
    );
};

export default RegisterWithEmail;
