import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import '@mantine/core/styles.css';

import { setupStore } from './store/store';

const store = setupStore();

export default function App() {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <Router />
      </MantineProvider>
    </Provider>
  );
}
