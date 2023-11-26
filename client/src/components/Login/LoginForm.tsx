import { FC, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { login, registration } from '../../store/auth/authThunks';

export const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();

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
      <button onClick={() => dispatch(login({ email, password }))}>Login</button>
      <button onClick={() => dispatch(registration({ email, password }))}>Registration</button>
    </div>
  );
};
