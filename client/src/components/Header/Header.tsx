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
        <h3 style={{ margin: '5px' }}>
          {userData.isAuth ? `Wellcome, ${userData.user.userName}` : 'Log In'}
        </h3>
        <p>{userData.user.isActivated ? 'Account is activated' : 'Confirm your account'}</p>
        <button type="button" onClick={() => dispatch(logout())}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
