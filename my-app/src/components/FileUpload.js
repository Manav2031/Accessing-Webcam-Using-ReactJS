import React, { useState } from "react";
import axios from "axios";
import './styles.css'

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [output, setOutput] = useState(null)

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post("http://localhost:4000/upload/file", formData);
      console.log(response);
      setOutput(response.data.output)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="file-upload-container">
      <input className="file-input" type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button className="upload-button" onClick={handleUpload}>Upload</button>
      {output && (
            <div className="output-container">
                { output } 
            </div>
        )}
    </div>
  );
};

export default FileUpload;