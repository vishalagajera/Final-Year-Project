// FileUploadForm.js
import React, { useState, useRef } from 'react';

const FileUploadForm = () => {
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const maxSize = 10 * 1024;
        if (file && file.size > maxSize) {
            alert('File size is large');
            fileInputRef.current.value = '';
            setFile(null);
        } else {
            setFile(file);
        }
    };

    const handleSubmit = async () => {
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await fetch('http://localhost:5500/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    console.log('File uploaded successfully.');
                } else {
                    console.error('File upload failed.');
                }
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        } else {
            alert("Please Select file");
        }
    };

    return (
        <div>
            <input type="file" name="file" onChange={handleFileChange} ref={fileInputRef} />
            <button onClick={handleSubmit}>Upload</button>
        </div>
    );
};

export default FileUploadForm;
