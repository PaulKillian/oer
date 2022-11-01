import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import $ from 'jquery'; 
import Image from 'next/image'

function ImageReader(packet){
    useEffect(() => {
        var log = document.getElementById('log');
 
    if(log.firstChild && log.firstChild.status === packet.status){
        if('progress' in packet){
            var progress = log.firstChild.querySelector('progress')
            progress.value = packet.progress
        }
    } else {
        var line = document.createElement('div');
        line.status = packet.status;
        var status = document.createElement('div')
        status.className = 'status'
        status.appendChild(document.createTextNode(packet.status))
        line.appendChild(status)
 
        if('progress' in packet){
            var progress = document.createElement('progress')
            progress.value = packet.progress
            progress.max = 1
            line.appendChild(progress)
        }
 
 
        if(packet.status == 'done'){
            log.innerHTML = ''
            var pre = document.createElement('pre')
            pre.appendChild(document.createTextNode(packet.data.text.replace(/\n\s*\n/g, '\n')))
            line.innerHTML = ''
            line.appendChild(pre)
            $(".fas").removeClass('fa-spinner fa-spin')
            $(".fas").addClass('fa-check')
        }
 
        log.insertBefore(line, log.firstChild)
    }
    })
    

const { createWorker } = require("tesseract.js");
const worker = createWorker();
  worker.recognize("input[type=file]").val())
  .progress(function(packet){
      console.info(packet)
      progressUpdate(packet)
  })
  .then(function(data){
      console.log(data)
      progressUpdate({ status: 'done', data: data })
  })

  return (
     <div>
        <select id="langsel">
         <option value='eng' selected> English </option>
        </select>
        <input type="file" id="file-1" class="inputfile" />
        <Image id="selected-image"  alt='' src="" />
        <div id="log">
            <span id="startPre">  
            <a id="startLink" href="#">Click here to recognize text</a> or choose your own image
        </span>
    </div>
  </div>
  );
}

export default ImageReader;
