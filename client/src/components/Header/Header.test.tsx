import { render, userEvent, screen } from '@test-utils';
import React from 'react';
import { Provider } from 'react-redux';
import Header from './Header';
import configureStore from 'redux-mock-store';

describe('Header', () => {
    const mockStore = configureStore();
    const store = mockStore({
        user: {
            user: {
                name: 'test',
                email: 'test@test.com',
                isActivated: false,
            },
        },
    });
  it('should render the header', () => {
    render(<Header />);

    expect(screen.getByText('Wellcome, ')).toBeInTheDocument();
    expect(screen.getByText('Log In')).toBeInTheDocument();
    expect(screen.getByText('Account is activated')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Log Out' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'The list of users' })).toBeInTheDocument();
  });

  it('should log out', () => {
    render(<Header />);

    userEvent.click(screen.getByRole('button', { name: 'Log Out' }));

    expect(screen.getByText('Log In')).toBeInTheDocument();
  });
});
