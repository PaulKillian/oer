import {useState} from 'react';
import supabase from './supabase';

export function Upload() {
  const avatarFile = event.target.files[0]
  const { data, error } = await supabase
    .storage
    .from('avatars')
    .upload('public/avatar1.png', avatarFile, {
      cacheControl: '3600',
      upsert: false
    })

     return (
       <div className="App">
         <form>
           <input 
             type="file"
           />
         <button type='submit'></button>
         </form>
       </div>
     );
   }

   