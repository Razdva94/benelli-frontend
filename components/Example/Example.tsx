// 'use client';
// import React, { useState } from 'react';

// function Example() {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e: any) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

//   const handleFormSubmit = (e: any) => {
//     e.preventDefault();

//     if (file) {
//       const formData = new FormData();
//       formData.append('image', file)
//       fetch('http://localhost:3000/apiS/upload', {
//         method: 'POST',
//         body: formData,
//         // headers: {
//         //   'Content-type': 'image/jpeg',
//         // },
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data);
//           // Здесь вы можете обработать ответ от сервера
//         })
//         .catch((error) => {
//           console.error('Ошибка при отправке файла:', error);
//         });
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={(e) => handleFormSubmit(e)}>
//         <input
//           type='file'
//           accept='image/*'
//           onChange={(e) => handleFileChange(e)}
//           name='image'
//           multiple
//         />
//         <button type='submit'>Отправить</button>
//       </form>
//     </div>
//   );
// }

// export default Example;

'use client';
import React, { useState } from 'react';

function Example() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e:any) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles as any);
  };

  const handleFormSubmit = (e:any) => {
    e.preventDefault();

    if (files.length > 0) {
      const formData = new FormData();
      files.forEach((file, index) => {
        formData.append(`images`, file);
      });
      fetch('http://localhost:3000/apiS/photos', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Здесь вы можете обработать ответ от сервера
        })
        .catch((error) => {
          console.error('Ошибка при отправке файлов:', error);
        });
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input
          type='file'
          accept='image/*'
          onChange={(e) => handleFileChange(e)}
          name='image'
          multiple
        />
        <button type='submit'>Отправить</button>
      </form>
    </div>
  );
}

export default Example;