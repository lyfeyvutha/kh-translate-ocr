import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import "./OCRTranslator.css";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const OCRTranslator = () => {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= 200) {
      setText(newText);
      setCharCount(newText.length);
    }
  };

  return (
    <div className="ocr-container">
      <div className="upload-area">
        <div className="upload-icon"></div>
        <p className="upload-title">ជ្រើសរើសឯកសារ ឬអូស ហើយទម្លាក់នៅទីនេះ</p>
        <p className="upload-subtitle">JPG, PNG ឬ PDF ទំហំឯកសារមិនលើសពី 10MB</p>
        <Button variant="contained" component="label" className="upload-button">
          ជ្រើសរើសឯកសារ
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => console.log(event.target.files)}
            accept=".jpg,.png,.pdf"
          />
        </Button>
      </div>
      <div className="text-area">
        <textarea value={text} onChange={handleTextChange} placeholder="បកប្រែ" />
        <div className="character-count">{charCount}/200</div>
      </div>
    </div>
  );
};

export default OCRTranslator;
