import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import $ from 'jquery'; 
import Image from 'next/image'

function ImageReader(packet){
    

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
        <select id="langsel">
         <option value='eng' selected> English </option>
        </select>
        <input type="file" id="file-1" class="inputfile" />
        <div id="log">
            <span id="startPre">  
            <a id="startLink" href="#">Click here to recognize text</a> or choose your own image
        </span>
    </div>
  </div>
  );
}

export default ImageReader;
