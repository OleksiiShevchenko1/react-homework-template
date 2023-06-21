import { data } from '../data/users';
import { User } from './User/User';
import { UserList } from './UserList/UserList';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <>
      <Section>
        <User user={data[0]} />
      </Section>
      <Section title="List of Users">
        <UserList users={data} />
      </Section>
    </>
  );
};
