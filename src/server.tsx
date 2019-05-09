import * as path from 'path';
import * as fs from 'fs';
import * as express from 'express';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import store from "./stores/configureStore";
import { renderRoutes } from "react-router-config";
import routes from './routes';

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
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
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
router.use('^/$', serverRenderer)

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
)

// tell the app to use the above rules
app.use(router)

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT} 😎`)
})