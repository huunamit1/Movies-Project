import slugify from 'slugify';

function useSlug(data, options = {}) {
    return slugify(data || '', {
        locale: 'vi',
        lower: true,
        strict: true,
        ...options,
    });
}

export default useSlug;
