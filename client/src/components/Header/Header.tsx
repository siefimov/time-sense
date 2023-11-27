import * as React from 'react';

const Header: React.FunctionComponent = () => (
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
)

export default Header;
