import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { theme } from './utils/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/app/store';

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <Router>
        {/* <ErrorBoundary> */}
        {/* <Suspense fallback={<GeneralLoading />}> */}
        <App />
        {/* </Suspense> */}
        {/* </ErrorBoundary> */}
      </Router>
    </ChakraProvider>
  </Provider>,
  document.getElementById('root'),
);
