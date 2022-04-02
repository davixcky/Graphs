import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GraphProvider } from './context/Graph/GraphServiceContext';

ReactDOM.render(
  <GraphProvider>
    <StrictMode>
      <ColorModeScript />
      <App />
    </StrictMode>
  </GraphProvider>,
  document.getElementById('root')
);
