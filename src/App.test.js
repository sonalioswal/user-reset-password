import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from "./store";

test('Render app', () => {
  render (
    <Provider store={configureStore()}>
      <App />
    </Provider>
  )
  expect(screen.getByText(/Reset Password/)).toBeInTheDocument()
})