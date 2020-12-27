import { useState } from 'react';
import Layout from '../components/shared/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from '../components/Auth/LoginForm';

const Login = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  return (
    <Layout>
      <ToastContainer />
      <LoginForm values={values} setValues={setValues} />
    </Layout>
  );
};

export default Login;
