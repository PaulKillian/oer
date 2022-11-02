import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import Image from 'next/image'

function ImageReader(packet){
    const [selectedImage, setSelectedImage] = useState(null);
    

// const { createWorker } = require("tesseract.js");
// const worker = createWorker();
//   worker.recognize(file, $("#file-1").val())
//   .progress(function(packet){
//       console.info(packet)
//       progressUpdate(packet)
//   })
//   .then(function(data){
//       console.log(data)
//       progressUpdate({ status: 'done', data: data })
//   })

  return (
     <div>
        <input 
          type="file" 
          id="file-1" 
          class="inputfile" 
          onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
          />
    </div>
  );
}

export default ImageReader;
