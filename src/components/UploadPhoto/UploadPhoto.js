import PropTypes from 'prop-types';
import { memo, useState } from 'react';
import Avatar from '~/components/Avatar';
import { CameraIcon } from '~/components/Icons';
import deleteImage from '~/firebase/deleteImage';
import uploadImage from '~/firebase/uploadImage';

const UploadPhoto = ({ name, value, setValue }) => {
    const [progress, setProgress] = useState(0);

    const handleChange = async (e) => {
        const file = e.target.files[0];

        try {
            const result = await uploadImage(file, setProgress);
            setValue('avatar', result);
            if (value?.name) {
                deleteImage(value.name);
            }
            setProgress(0);
        } catch (error) {
            console.log('🚀 ~ handleChange ~ error', error);
        }
    };

    return (
        <label className="rounded-full w-36 h-36 p-2 border border-dashed border-[rgba(145,_158,_171,_0.32)]">
            <div className="group overflow-hidden rounded-full relative w-full h-full">
                <input
                    name={name}
                    className="hidden"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                />
                <div
                    className={`${
                        progress !== 0
                            ? 'opacity-[0.72]'
                            : value
                            ? 'opacity-0'
                            : 'opacity-100'
                    } absolute inset-0 cursor-pointer transition-all duration-300 group-hover:bg-[rgb(22,_28,_36)] group-hover:text-white group-hover:opacity-[0.72] rounded-full flex flex-col items-center justify-center text-[#637381] bg-[rgb(244,_246,_248)] z-20`}
                >
                    {progress <= 0 ? (
                        <>
                            <CameraIcon className="w-6 h-6 mb-2"></CameraIcon>
                            <span className="text-xs">Upload photo</span>
                        </>
                    ) : (
                        <span>{Math.floor(progress)} %</span>
                    )}
                </div>
                {value && (
                    <Avatar
                        className="absolute inset-0 z-10"
                        src={value.url}
                        alt=""
                    ></Avatar>
                )}
            </div>
        </label>
    );
};

UploadPhoto.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.object,
    setValue: PropTypes.func.isRequired,
};

export default memo(UploadPhoto);
