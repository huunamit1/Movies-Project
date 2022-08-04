import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage';
import { v4 } from 'uuid';

function uploadImage(file, setProgress) {
    const storage = getStorage();

    const fileName = v4() + '.' + file.name.split('.')[1];

    const storageRef = ref(storage, 'images/' + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

                setProgress?.(progress);
            },
            (error) => {
                reject(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve({
                        name: fileName,
                        url: downloadURL,
                    });
                });
            },
        );
    });
}

export default uploadImage;
