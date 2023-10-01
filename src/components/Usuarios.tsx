import { useUsers } from '../hooks/useUsers';
import { User } from '../interfaces/reqRes';

export const Users = () => {
  const { users, page, nextPage, previousPage } = useUsers();

  const renderItem = (user: User) => {
    return (
      <tr key={user.id}>
        <th>
          <img
            alt={user.first_name}
            src={user.avatar}
            style={{ width: 40, borderRadius: 100 }}
          />
        </th>
        <th>{user.first_name}</th>
        <th>{user.email}</th>
      </tr>
    );
  };

  const noUsers = () => {
    if (users.length === 0) {
      return <div className="alert alert-danger">There are no more users.</div>;
    }
  };

  return (
    <>
      <h3>Users:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>{users.map((user) => renderItem(user))}</tbody>
      </table>

      {noUsers()}

      <button className="btn btn-primary" onClick={previousPage}>
        Previous
      </button>

      <span style={{ marginLeft: 20, marginRight: 20, fontSize: 25 }}>
        {page}
      </span>

      <button className="btn btn-primary" onClick={nextPage}>
        Next
      </button>
    </>
  );
};
