import { doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Skeleton from 'react-loading-skeleton';
import { toast } from 'react-toastify';
import Checkbox from '~/components/Checkbox';
import Form from '~/components/Form';
import FormGroup, { FormGroupSkeleton } from '~/components/FormGroup';
import Input from '~/components/Input';
import Label from '~/components/Label';
import RequestLogin from '~/components/RequestLogin';
import UploadPhoto, { UploadPhotoSkeleton } from '~/components/UploadPhoto';
import useAuth from '~/context/Auth';
import { db } from '~/firebase/firebaseConfig';
import { useBackToTop } from '~/hooks';

// FIXME Input Birthday
// FIXME When editing Avatar without clicking update, the avatar image you are using is still deleted

const EditProfileUser = () => {
    const { user, setUser, loading } = useAuth();
    const {
        control,
        reset,
        watch,
        handleSubmit,
        setValue,
        formState: { isSubmitting },
    } = useForm();

    const handleValid = async (values) => {
        try {
            await updateDoc(doc(db, 'users', user.uid), {
                ...values,
                updatedAt: serverTimestamp(),
            });

            setUser((user) => ({ ...user, ...values }));
            toast.success('Update personal information successfully!');
        } catch (error) {
            toast.error(error.message);
        }
    };

    useBackToTop();

    useEffect(() => {
        if (!user) return;

        const defaultValues = {
            name: user.name,
            birthday: user.birthday,
            gender: !!user.gender,
            avatar: user.avatar,
        };

        if (user.provider === 'email') defaultValues.password = user.password;

        reset(defaultValues);
    }, [reset, user]);

    if (!user && !loading) return <RequestLogin />;

    const genderWatch = watch('gender');
    const avatarWatch = watch('avatar');

    return (
        <div className="mt-[50px] mb-10 max-w-[800px] mx-auto">
            {(user && (
                <>
                    <h1 className="py-8 px-4 font-semibold text-3xl text-center">
                        Edit Personal Information
                    </h1>
                    <Form
                        onSubmit={handleSubmit(handleValid)}
                        cols={2}
                        className="mt-[30px] px-10 grid-cols-1 sm:grid-cols-2"
                    >
                        <div className="flex justify-center sm:col-start-1 sm:col-end-3">
                            <UploadPhoto
                                name="avatar"
                                value={avatarWatch}
                                setValue={setValue}
                            ></UploadPhoto>
                        </div>
                        <FormGroup>
                            <Label htmlFor="name">Full name</Label>
                            <Input
                                control={control}
                                placeholder="Enter your name"
                                name="name"
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="birthday">Birthday</Label>
                            <Input
                                type="date"
                                control={control}
                                name="birthday"
                                placeholder="Enter your birthday"
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="gender">Gender</Label>
                            <Checkbox
                                value={!!genderWatch}
                                control={control}
                                name="gender"
                                className="mt-[11px]"
                            >
                                Male
                            </Checkbox>
                        </FormGroup>
                        {false && (
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    type="password"
                                    control={control}
                                    placeholder="Enter your password"
                                    name="password"
                                ></Input>
                            </FormGroup>
                        )}
                        <Form.Submit isLoading={isSubmitting}>
                            Update
                        </Form.Submit>
                    </Form>
                </>
            )) || (
                <>
                    <Skeleton
                        containerClassName="py-8 px-4 flex justify-center"
                        className="text-3xl w-[400px] !leading-9"
                    />
                    <div className="mt-[30px] px-10 grid grid-cols-1 sm:grid-cols-2 gap-3 mx-auto">
                        <div className="flex justify-center sm:col-start-1 sm:col-end-3">
                            <UploadPhotoSkeleton />
                        </div>
                        <FormGroupSkeleton />
                        <FormGroupSkeleton />
                        <FormGroupSkeleton type="checkbox" />
                        <div className="flex justify-center sm:col-start-1 sm:col-end-3">
                            <Skeleton
                                containerClassName="flex w-[140px]"
                                className="h-11"
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default EditProfileUser;
