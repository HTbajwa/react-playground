import React, { useState } from "react";

function UploadFile() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

 
  const handleUpload = async () => {
    if (!file) return alert("Please select a file first!");

   
    await new Promise((res) => setTimeout(res, 1000));

    
    setUploaded(true);
    alert("File uploaded successfully (dummy upload)");
  };

 
  const handleDownload = () => {
  
    const dummyBlob = new Blob(["This is dummy file content."], {
      type: "text/plain",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(dummyBlob);
    link.download = "dummy-file.txt";
    link.click();
  };

 
  const handleFormData = () => {
    const formData = new FormData();
    formData.append("username", "Hadia Tariq");
    formData.append("file", file || "No file selected");

   
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    alert("🧾 FormData logged in console!");
  };

  return (
    <div
      style={{
        margin: "40px auto",
        width: "400px",
        padding: "20px",
        border: "2px solid #ccc",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <h2>📂 React File Handling Demo (Dummy)</h2>

      {/* File Upload */}
      <input type="file" onChange={handleFileChange} />
      <br /><br />

      {/* Preview */}
      {preview && (
        <div>
          <p>Preview:</p>
          {file.type.startsWith("image/") ? (
            <img src={preview} alt="preview" width="150" />
          ) : (
            <embed src={preview} width="200" height="150" />
          )}
        </div>
      )}

      <br />

      {/* Upload Button */}
      <button onClick={handleUpload}>Upload (Dummy)</button>
      <br /><br />

      {/* FormData Simulation */}
      <button onClick={handleFormData}>Check FormData</button>
      <br /><br />

      {/* Download Dummy File */}
      {uploaded && (
        <button onClick={handleDownload}>Download Dummy File</button>
      )}
    </div>
  );
}

export default UploadFile;
