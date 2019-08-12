import BaseLayout from 'component/Layouts/BaseLayout';
import Home from 'page/Home';

const routes: any = [
  {
    component: BaseLayout,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
    ]
  }
];

export default routes;