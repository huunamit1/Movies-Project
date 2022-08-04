import PropTypes from 'prop-types';
import { memo, useEffect, useRef, useState } from 'react';
import config from '~/config';

const Image = ({ src, alt, className = '', onError }) => {
    const [loaded, setLoaded] = useState(false);
    const [avatar, setAvatar] = useState(src);
    const imgRef = useRef();

    useEffect(() => {
        const img = imgRef.current;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                img.setAttribute('src', avatar);
            }
        });

        if (img) {
            observer.observe(img);
        }

        return () => {
            if (img) {
                observer.unobserve(img);
            }
        };
    }, [avatar]);

    return (
        <img
            ref={imgRef}
            className={`${className} w-full h-full object-cover transition-all duration-[400ms] ease-in opacity-100`}
            src={src}
            alt={alt}
            onError={onError ? onError : () => setAvatar(config.imageBackup)}
            style={{
                opacity: loaded ? '1' : '0',
            }}
            onLoad={() => {
                setLoaded(true);
            }}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    onError: PropTypes.func,
};

export default memo(Image);
