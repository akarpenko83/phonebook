import Layout from '../components/Layout';
import { useFetchUser } from '../../lib/authContext';

export default function Home() {
  const { user, loading } = useFetchUser();
  console.log('index.html: ', user, loading);
  return (
    <Layout user={user}>
      <h1 className="font-bold text-5xl text-center">HOME</h1>
    </Layout>
  );
}
