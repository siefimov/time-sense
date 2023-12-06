import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { login, registration } from '../../store/auth/authThunks';

export const AuthForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const user = useAppSelector((state) => state.users);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  if (user.isAuth) {
    navigate('/');
  }

  return (
    <div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button type="button" onClick={() => dispatch(login({ email, password }))}>
        Login
      </button>
      <button type="button" onClick={() => dispatch(registration({ email, password }))}>
        Registration
      </button>
    </div>
  );
};
