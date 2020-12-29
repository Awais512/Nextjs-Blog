import { useState, useEffect } from 'react';
import { createCategory } from '../../actions/categories';
import { isAuth, getCookie } from '../../actions/auth';
import Link from 'next/link';
import Router from 'next/router';
import CategoryForm from './CategoryForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Categories = () => {
  const [values, setValues] = useState({
    name: '',
    error: false,
    success: false,
    categories: [],
    removed: false,
  });

  const { name, error, success, categories, removed } = values;
  const token = getCookie('token');

  const handleChange = (e) => {
    setValues({
      ...values,
      name: e.target.value,
      error: false,
      success: false,
      removed: '',
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await createCategory(name, token);
      console.log(data);
      setValues({ ...values, error: false, success: true, name: '' });
      toast.success('Category Created Successfully');
    } catch (error) {
      setValues({ ...values, error: false, success: true, name: '' });
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <ToastContainer />
      <CategoryForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        name={name}
      />
    </div>
  );
};

export default Categories;
