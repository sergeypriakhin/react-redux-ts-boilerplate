import * as path from 'path';
import * as fs from 'fs';
import * as express from 'express';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as webpackHotMiddleware from 'webpack-hot-middleware';
import * as webpackConfig from '../webpack.config';
import { Provider } from "react-redux";
import { StaticRouter } from "react-router";
import { renderRoutes } from "react-router-config";

import LanguageProvider from './modules/LanguageProvider';

import configureStore from "./stores/configureStore";
import routes from './routes';
import { messages } from './intl';
import history from 'utl/history';

const initialState = {};
const store = configureStore(initialState, history);
const PORT = process.env.PORT || 3000;
const app = express();

const router = express.Router();

const serverRenderer = (req: express.Request, res: express.Response) => {
  const context: any = {};
  const indexFile = path.resolve('../build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }

    const app = ReactDOMServer.renderToString(
      <Provider store={store} key="provider">
        <LanguageProvider messages={messages}>
          <StaticRouter location={req.url} context={context}>
            {renderRoutes(routes)}
          </StaticRouter>
        </LanguageProvider>
      </Provider>
    );

    return res.send(
      data.replace(
        '<div id="app"></div>',
        `<div id="app">${app}</div>`
      )
    )
  })
}

const compiler: webpack.Compiler = webpack(webpackConfig());
const options: webpackDevMiddleware.Options = {
  publicPath: '/',
  serverSideRender: true,
  stats: {
    colors: true,
  },
};

router.use(webpackDevMiddleware(compiler, options));
router.use(webpackHotMiddleware(compiler));

router.use('^/$', serverRenderer);

app.use(express.static(path.resolve('build'), { maxAge: '30d' }));
// tell the app to use the above rules
app.use(router)

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT} 😎`);
})