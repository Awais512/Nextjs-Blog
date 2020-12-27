import { useState } from 'react';
import RegisterForm from '../components/Auth/RegisterForm';
import Layout from '../components/shared/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  return (
    <Layout>
      <ToastContainer />
      <RegisterForm values={values} setValues={setValues} />
    </Layout>
  );
};

export default Register;
