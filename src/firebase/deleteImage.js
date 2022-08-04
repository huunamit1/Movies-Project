import { getStorage, ref, deleteObject } from 'firebase/storage';

async function deleteImage(fileName) {
    if (!fileName) return;

    const storage = getStorage();

    try {
        const desertRef = ref(storage, 'images/' + fileName);
        await deleteObject(desertRef);
    } catch (error) {
        throw new Error(error.message);
    }
}

export default deleteImage;
