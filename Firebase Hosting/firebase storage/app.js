import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";
import { app } from './confiq.js'; 

// Initialize Firebase Storage
const storage = getStorage(app);

document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    const file = document.getElementById('imageUpload').files[0];

    if (userId && password && file) {
        try {
            // Reference to the storage location
            const storageRef = ref(storage, `users/${userId}/profile.jpg`);

            // Upload the file to Firebase Storage
            await uploadBytes(storageRef, file);

            // Get the download URL
            const url = await getDownloadURL(storageRef);

            // Display the image URL
            document.getElementById('imageURL').innerText = `Image URL: ${url}`;
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Failed to upload image.');
        }
    }
});
