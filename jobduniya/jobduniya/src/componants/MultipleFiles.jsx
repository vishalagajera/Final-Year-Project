// FileUploadForm.js
import React, { useState, useRef } from 'react';

const FileUploadForm = () => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    const maxSize = 10 * 1024;

    const validFiles = Array.from(selectedFiles).filter(file => file.size <= maxSize);

    if (validFiles.length !== selectedFiles.length) {
      alert('Some files are too large. Please select smaller files.');
      fileInputRef.current.value = '';
    } else {
      setFiles(validFiles);
    }
  };

  const handleSubmit = () => {
    if (files.length > 0) {
      const formData = new FormData();

      files.forEach(async (file, index) => {
        formData.set(`files`, file);
        try {
          const response = await fetch('http://localhost:5500/upload', {
            method: 'POST',
            body: formData,
          });
          if (response.ok) {
            console.log('Files uploaded successfully.');
            // formData.delete(`files`);
          } else {
            console.error('File upload failed.');
          }
        } catch (error) {
          console.error('Error uploading files:', error);
        }
      });

    } else {
      alert('Please select at least one file.');
    }
  };

  return (
    <div>
      <input type="file" name="files" onChange={handleFileChange} multiple ref={fileInputRef} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default FileUploadForm;