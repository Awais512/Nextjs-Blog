import { registerUser } from '../../actions/auth';
import { toast } from 'react-toastify';

const RegisterForm = ({ values, setValues }) => {
  const { name, email, password } = values;
  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await registerUser({ name, email, password });
      console.log(data);
      setValues({
        ...values,
        name: '',
        password: '',
        email: '',
      });
      toast.success('Registration Completed Successfully');
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h1 className='text-center mt-2'>Register Form</h1>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label className='text-muted'>Name</label>
              <input
                type='text'
                className='form-control'
                placeholder='Type your Name'
                value={name}
                onChange={handleChange('name')}
              />
            </div>

            <div className='form-group'>
              <label className='text-muted'>Email</label>
              <input
                type='email'
                className='form-control'
                placeholder='Type your Email'
                value={email}
                onChange={handleChange('email')}
              />
            </div>

            <div className='form-group'>
              <label className='text-muted'>Password</label>
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
