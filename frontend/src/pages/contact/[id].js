import { redirect } from 'next/navigation';
import fetcher from '../../../lib/api';
import { useFetchUser } from '../../../lib/authContext';
import Layout from '../../components/Layout';
const { STRAPI_URL } = process.env;

const Contact = ({ contact }) => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user}>
      {user ? (
        <h1 className="text-6xl md:text-4xl font-extrabold leading-tighter mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
            {contact.attributes.title} | {contact.attributes.phone} | {contact.attributes.birthDate}
          </span>
        </h1>
      ) : (
        <p className="text-3xl">not authorized</p>
      )}
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  console.log(STRAPI_URL);
  const contactResponse = await fetcher(`http://127.0.0.1:1337/api/contacts/${id}`);
  return {
    props: {
      contact: contactResponse.data,
    },
  };
}

export default Contact;
