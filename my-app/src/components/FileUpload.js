import React, { useState } from "react";
import {ReactComponent as Circle} from "../static/Component 1.svg"
import {ReactComponent as Footer} from "../static/Component 12.svg"
import axios from "axios";
import '../styles/styles.css';

const FileUpload = ({ url }) => {
  const [file, setFile] = useState(null);
  const [output, setOutput] = useState(null);
  const [formData, setFormData] = useState(new FormData());

  const handleUpload = async () => {
    if (!file) {
      console.error("No file selected.");
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/jpg", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      console.error("Invalid file type. Please select a valid image file.");
      return;
    }

    const newFormData = new FormData();
    newFormData.append("invoice_file", file);
    setFormData(newFormData);

    try {
      setOutput("File uploaded successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await axios.post("https://itechseed-ocr-task.onrender.com/invoice", formData, { responseType: 'blob' });
      const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'invoice.xlsx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setOutput("File downloaded successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="file-upload">
      <Circle style={{ position: 'absolute' }}/>
    <div className="file-upload-container">
    <h1> INVOICE TO EXCEL </h1>
      <input className="file-input" type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
      <button className="upload-button" onClick={handleUpload}>Upload Image</button>
      <br /> <br />
      <button className="download-button" onClick={handleDownload}>Download Excel File</button>
      <br /> <br />
      <p>{output}</p>
    </div>
    <div className="filefooter">
    <Footer className="camera-footer" style={{ position: 'relative' }}/>
    </div>
    </div>
  );
};

export default FileUpload;
