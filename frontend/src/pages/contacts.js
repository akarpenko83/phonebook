import { useState } from 'react';
import fetcher from '../../lib/api';
import Contacts from '../components/Contacts';
import Layout from '../components/Layout';
import useSWR from 'swr';
import { useFetchUser } from '../../lib/authContext';
const { STRAPI_URL } = process.env;

const ContactList = ({ contacts }) => {
  const { user, loading } = useFetchUser();
  const [pageIndex, setPageIndex] = useState(1);
  const { data } = useSWR(
    `http://127.0.0.1:1337/api/contacts?pagination[page]=${pageIndex}&pagination[pagesize]=5`,
    fetcher,
    { fallbackData: contacts },
  );
  return (
    <Layout user={user}>
      <h1 className="text-5xl md:text-6xl font-bold leading-tighter mb-4 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
          Contact List
        </span>
      </h1>
      {!loading && !user ? (
        <>
          <p className="text-2xl text-center">Your contact list is empty</p>
          <p className="text-1xl text-center">Please login or register</p>
        </>
      ) : (
        <>
          <Contacts contacts={data} />

          <div className="space-x-2 space-y-2 mx-auto">
            <button
              className={`md:p-2 rounded py-2 text-black text-white p-2 ${
                pageIndex === 1 ? 'bg-gray-300' : 'bg-blue-400'
              }`}
              disabled={pageIndex === 1}
              onClick={() => setPageIndex(pageIndex - 1)}
            >
              {' '}
              Previous
            </button>
            <button
              className={`md:p-2 rounded py-2 text-black text-white p-2 ${
                pageIndex === (data && data.meta.pagination.pageCount)
                  ? 'bg-gray-300'
                  : 'bg-blue-400'
              }`}
              disabled={pageIndex === (data && data.meta.pagination.pageCount)}
              onClick={() => setPageIndex(pageIndex + 1)}
            >
              {' '}
              Next
            </button>
            <span>{`${pageIndex} of ${data && data.meta.pagination.pageCount}`}</span>
          </div>
        </>
      )}
    </Layout>
  );
};

export default ContactList;

export async function getServerSideProps() {
  try {
    const contactsResponse = await fetcher(
      `http://127.0.0.1:1337/api/contacts?pagination[page]=1&pagination[pagesize]=5`,
    );
    return {
      props: {
        contacts: contactsResponse,
      },
    };
  } catch (error) {
    console.log(error.message);
  }
}
