import { useEffect, useState } from "react";

export const useModalForm = (initialForm = {}, count) => {
  const [formData, setFormData] = useState(initialForm);
  const [show, setShow] = useState(false);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
      counterForm: count,
    });
  };

  const resetForm = () => {
    setFormData({
      ...initialForm,
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitForm = (e) => {
    if (count < 1) return;
    e.preventDefault();

    const { username, email, password, date } = formData;

    const message = `
      Username: ${username}
      Email: ${email}
      Password: ${password}
      Date: ${date}
      Se contaron: ${count}
    `;
    alert(message);
    resetForm();
    handleClose();
  };
  return {
    ...formData,
    show,
    formData,
    onInputChange,
    resetForm,
    handleClose,
    handleShow,
    submitForm,
  };
};
