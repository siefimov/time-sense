import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToggle } from '@mantine/hooks';
import { useForm, hasLength } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Container,
} from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { login, registration } from '../../store/auth/authThunks';

export function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    validateInputOnBlur: true,
    initialValues: {
      userName: '',
      email: '',
      password: '',
      terms: true,
    },

    validate: {
      userName: hasLength({ min: 2, max: 10 }, 'Name must be 2-10 characters long'),
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  const user = useAppSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user.isAuth) {
      navigate('/');
    }
  }, [user.isAuth, navigate]);

  return (
    <Container
      h="100vh"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
      }}
    >
      <Paper radius="md" p="xl" withBorder {...props}>
        <Text size="lg" fw={500}>
          Welcome to Time Sense
        </Text>

        <Divider labelPosition="center" my="lg" />

        <form onSubmit={form.onSubmit(console.log)}>
          <Stack>
            {type === 'register' && (
              <TextInput
                required
                label="Name"
                placeholder="Your name"
                value={form.values.userName}
                onChange={(event) => form.setFieldValue('userName', event.currentTarget.value)}
                radius="md"
              />
            )}

            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && 'Invalid email'}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Password should include at least 6 characters'}
              radius="md"
            />

            {type === 'register' && (
              <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
                onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
              />
            )}
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
              {type === 'register'
                ? 'Already have an account? Login'
                : "Don't have an account? Register"}
            </Anchor>
            {type === 'register' ? (
              <Button onClick={() => dispatch(registration(form.values))}>Register</Button>
            ) : (
              <Button onClick={() => dispatch(login(form.values))}>Login</Button>
            )}
          </Group>
        </form>
      </Paper>
    </Container>
  );
}
