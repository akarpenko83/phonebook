import Head from 'next/head';
import Nav from './Nav';
import { UserProvider } from '../../lib/authContext';

const Layout = ({ user, loading = false, children }) => {
  return (
    <UserProvider value={{ user, loading }}>
      <Head>
        <title>Phonebook</title>
      </Head>
      <main className="flex flex-wrap h-screen">
        <Nav />
        <div
          className="flex
        justify-center
        items-center
        bg-white
        mx-auto
        w-2/3
        rounded-lg
        h-5/6
        my-2
        p-16"
        >
          <div className="text-2-xl font-medium">{children}</div>
        </div>
      </main>
    </UserProvider>
  );
};

export default Layout;
