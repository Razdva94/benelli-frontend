import React from 'react';

export default function useForm(inputValues: any = {}) {
  const [values, setValues] = React.useState(inputValues);
  const handleChange = (event: any) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
}
