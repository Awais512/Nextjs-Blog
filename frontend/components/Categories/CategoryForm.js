const CategoryForm = ({ handleSubmit, handleChange, name }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label className='text-muted'>Name</label>
        <input
          type='text'
          className='form-control'
          value={name}
          onChange={handleChange}
          required
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Create
      </button>
    </form>
  );
};

export default CategoryForm;
