import {useState} from 'react';

export function Upload() {
    const allInputs = {imgUrl: ''}
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState('')

    console.log(imageAsFile)
    const handleImageAsFile = (e) => {
      const image = e.target.files[0]
      setImageAsFile(imageFile => (image))
    }

    return (
      <div className="App">
        <form>
          <input 
            type="file"
            onChange={handleImageAsFile}
          />
        </form>
      </div>
    );
  }