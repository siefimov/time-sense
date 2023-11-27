import { FC, useEffect, useState } from 'react';
import { LoginForm } from '../Login/LoginForm';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { checkAuth, logout } from '../../store/auth/authThunks';
import { IUser } from '../../models/IUser';
import UserService from '../../services/UserService';

const Auth: FC = () => {
  const user = useAppSelector((state) => state.users);
  const [users, setUsers] = useState<IUser[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  const getUsers = async () => {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (user.isLoading) {
    return <div>Loading...</div>;
  }

  if (!user.isAuth) {
    return <LoginForm />;
  }

  return (
    <div>
      <h1>{user.isAuth ? `User is authorized ${user.user.userName}` : 'Log In'}</h1>
      <h1>{user.user.isActivated ? 'Account is activated' : 'Comfirm your account'}</h1>
      <button onClick={() => dispatch(logout())}>Log Out</button>
      <div>
        <button onClick={getUsers}>The list of users</button>
        {users.map((user) => (
          <div key={user.email}>{user.email}</div>
        ))}
      </div>
    </div>
  );
};

export default Auth;
