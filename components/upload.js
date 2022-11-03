import {useState, useEffect} from 'react';
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

    console.log(url)

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
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <input
        type="file"
        accept="image/*"
        className="block w-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        onChange={(event) => {
            handleUpload(event); // 👈 this will trigger when user selects the file.
        }}
      />
    <ImageReader url={url}/>
    </div>
    );
};

