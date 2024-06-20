
import { useState, useEffect } from 'react';

export const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log("Authenticated!", values);
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors,isSubmitting,values]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      setValues({
        ...values,
        skills: {
          ...values.skills,
          [value]: checked,
        },
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};
