import {useState, useEffect} from 'react';
import styles from "../styles/Home.module.css";
import { supabase } from './supabase';
import { ChangeEvent } from "react";
import Image from 'next/image';
import ImageReader from "../components/imageReader";

export function Upload() {
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const { data, error } = supabase.storage
            .from("oer-images")
            .getPublicUrl(`public/${file}`);
    
        if (data) {
            setUrl(data)
        } else if (error) {
            console.log(error);
        }
    }, [file])

    const handleUpload = (event) => {
        let file;
    
        if (event.target.files) {
          file = event.target.files[0];
        }
    
        const { data, error } = supabase.storage
          .from("oer-images")
          .upload("public/" + file?.name, file);
           setFile(file?.name)
    };
        
    return (
        <>
          <div className="d-flex flex-column align-items-center">
       <input 
        type="file" 
        name="file" 
        id="file" 
        className={styles.inputfile} 
        data-multiple-caption="{count} files selected" multiple
        onChange={(event) => {
            handleUpload(event); // 👈 this will trigger when user selects the file.
        }}
       />
        {file
            ? <label htmlFor="file">{file}</label>
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

