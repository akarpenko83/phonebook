import Link from 'next/link';

const Contacts = ({ contacts }) => {
  return (
    <>
      <ul className="list-none space-y-4 text-4xl font-bold mb-3">
        {contacts &&
          contacts.data.map(contact => (
            <li key={contact.id}>
              <Link href={`contact/` + contact.id}>{contact.attributes.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Contacts;
