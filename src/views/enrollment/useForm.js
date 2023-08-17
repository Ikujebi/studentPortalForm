import { useState } from 'react';

function useForm(initialState) {
  const [formData, setFormData] = useState(initialState);

  const updateFormData = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return [formData, updateFormData];
}

export default useForm;
