import { useEffect, useState } from 'react';
import Link from 'next/link';
import ProtectedRoute from "../components/ProtectedRoute";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
};

function Dashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const perPage = 5;
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to load users.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredUsers.length / perPage);
  const currentUsers = filteredUsers.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="dashboard-container">
      <input
        className="search"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th><th>Company</th><th>View</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map(u => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.company.name}</td>
              <td>
                <Link className="view-button" href={`/user/${u.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button disabled={page <= 1} onClick={() => setPage(p => p - 1)}>Previous</button>
        <button disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>Next</button>
      </div>
    </div>
  );
}

export default ProtectedRoute<typeof Dashboard>(Dashboard);
