import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout } from '../../store/auth/authThunks';

const Header: FC = () => {
  const userData = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div
        style={{
          borderBottom: '1px solid grey',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          padding: '15px',
        }}
      >
        <h2>Be Cool!</h2>
        <h3 style={{ margin: '5px' }}>Welcome! {userData.user.email}</h3>
        <p>{userData.user.isActivated ? 'Account is activated' : 'Confirm your account'}</p>
        <button type="button" onClick={() => dispatch(logout())}>
          <span>Log Out</span>
        </button>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default Header;
