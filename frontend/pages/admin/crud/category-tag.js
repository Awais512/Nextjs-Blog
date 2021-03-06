import Admin from '../../../components/Auth/Admin';
import Layout from '../../../components/shared/Layout';
import Link from 'next/link';
import Categories from '../../../components/Categories/Categories';

const CategoryTag = () => {
  return (
    <Layout>
      <Admin>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 pt-5 pb-5'>
              <h2>Manage Categories and Tags</h2>
            </div>
            <div className='col-md-6'>
              <Categories />
            </div>
            <div className='col-md-6'>
              <p>Tags</p>
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default CategoryTag;
