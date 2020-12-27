import { useState } from 'react';

const RegisterForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    loading: false,
    message: '',
    showForm: true,
  });
  const { name, email, password, error, loading, message, showForm } = values;
  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.table({ name, email, password, error, loading, message, showForm });
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h1 className='text-center mt-2'>Register Form</h1>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Type your Name'
                value={name}
                onChange={handleChange('name')}
              />
            </div>

            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                placeholder='Type your Email'
                value={email}
                onChange={handleChange('email')}
              />
            </div>

            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                placeholder='Type your password'
                value={password}
                onChange={handleChange('password')}
              />
            </div>
            <div>
              <button className='btn btn-primary btn-raised'>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
