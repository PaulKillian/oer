// import {useState} from 'react';
// import storage from './firebaseStorage';

// export function Upload() {
//     const allInputs = {imgUrl: ''}
//     const [imageAsFile, setImageAsFile] = useState('')
//     const [imageAsUrl, setImageAsUrl] = useState(allImputs)

//     console.log(imageAsFile)
//     const handleImageAsFile = (e) => {
//       const image = e.target.files[0]
//       setImageAsFile(imageFile => (image))
//     }

//     return (
//       <div className="App">
//         <form>
//           <input 
//             type="file"
//             onChange={handleImageAsFile}
//           />
//         </form>
//       </div>
//     );
//   }