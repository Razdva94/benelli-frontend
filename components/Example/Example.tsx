'use client';
import React, { useState } from 'react';
import api from '@/utils/api';

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
      // api.postMotoPhotos(formData)
      // fetch('http://localhost:3000/apiS/photos', {
      //   method: 'POST',
      //   body: formData,
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log(data);
      //     // Здесь вы можете обработать ответ от сервера
      //   })
      //   .catch((error) => {
      //     console.error('Ошибка при отправке файлов:', error);
      //   });
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