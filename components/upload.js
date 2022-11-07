import {useState, useEffect} from 'react';
import styles from "../styles/Home.module.css";
import { supabase } from './supabase';
import { ChangeEvent } from "react";
import Image from 'next/image';
import ImageReader from "../components/imageReader";

export function Upload() {
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState([]);

    useEffect(() => {
        if (file) { 
          console.log(file)
          for(let i = 0; i < file.length -1; i++) {
          const { data, error } = supabase.storage
            .from("oer-images")
            .getPublicUrl(`public/${file[i].name}`);
    
          if (data) {
            setUrl([...url, data.publicUrl])
          } else if (error) {
            console.log(error);
          }
        }};
    }, [file])

    const handleUpload = (event) => {
        let files;
    
        if (event.target.files) {
          files = [event.target.files];
        }
        files.forEach(async (file, index) => {
            for (let i = 0; i < file.length; i++) {
                const fileToUpload = file[i];
                const { data, error } = await supabase.storage
                    .from("oer-images")
                    .upload(`public/${fileToUpload.name}`, fileToUpload);
                if (data) {
                    setFile([...file, data.path]);
                } else if (error) {
                    console.log(error);
                }
            }
        })
        
    };
        
    return (
        <>
          <div className="d-flex flex-column align-items-center">
          <input 
            multiple
            type="file" 
            name="file" 
            id="file" 
            className={styles.inputfile} 
            onChange={(event) => {
                handleUpload(event); // 👈 this will trigger when user selects the file.
            }}
        />
            {file
                ? <label htmlFor="file">Ready</label>
                : <label htmlFor="file">Choose a file</label>
            }
        </div>
        <ImageReader 
        url={url}
        file={file}
    />
        </>
  
    );
};

