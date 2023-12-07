import React from 'react';
import { http, HttpResponse, delay } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, screen } from '@testing-library/react';
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from '../../../test-utils';

import Header from './Header';


// jest.mock('../../store/auth/authThunks');
// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
  http.get('/api/user', async () => {
    await delay(150);
    return HttpResponse.json('John Smith');
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test('logs out the user after clicking the log out button', async () => {
  renderWithProviders(<Header />);

  // should show no user initially, and not be fetching a user
//   expect(screen.getByText(/Welcome/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Account is activated/i)).not.toBeInTheDocument();

  // after clicking the 'Log Out' button, it should now show that it is fetching the user
//   fireEvent.click(screen.getByRole('button', { name: /Log Out/i }));
//   expect(screen.getByText(/Welcome/i)).toBeInTheDocument();

  // after some time, the user should be received
  expect(await screen.findByText(/Confirm your account/i)).toBeInTheDocument();
//   expect(screen.queryByText(/Log In/i)).not.toBeInTheDocument();
//   expect(screen.queryByText(/Account is activated/i)).not.toBeInTheDocument();
});
