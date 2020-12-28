import Private from '../../components/Auth/Private';
import Layout from '../../components/shared/Layout';

const UserIndex = () => {
  return (
    <Layout>
      <Private>
        <h2>User Dashboard Page</h2>
      </Private>
    </Layout>
  );
};

export default UserIndex;
