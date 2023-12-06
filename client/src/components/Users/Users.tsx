import { FC, useState } from 'react';
import UserService from '../../services/UserService';
import { IUser } from '../../models/IUser';

const Users: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  
  const getUsers = async () => {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button type="button" onClick={getUsers}>
        Get list of users
      </button>
      {users.map((user) => (
        <div key={user.email}>{user.userName} - {user.email}</div>
      ))}
    </div>
  );
};

export default Users;
