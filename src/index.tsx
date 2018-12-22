import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer as HotContainer } from 'react-hot-loader';
import store from './stores/configureStore';
import App from '@component/App';

const render = () =>
  ReactDOM.render(
    <HotContainer>
      <Provider store={store} key="provider">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </HotContainer>,
    document.getElementById('app') as HTMLElement
  );

render();

if ((module as any).hot) {
  (module as any).hot.accept('./components/App', () => render());
}
