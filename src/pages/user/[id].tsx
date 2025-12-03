import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
};

export default function UserDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then((data: User) => setUser(data))
        .catch(err => console.error(err));
    }
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="user-container">
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company.name}</p>
      <p>Website: {user.website}</p>
    </div>
  );
}
