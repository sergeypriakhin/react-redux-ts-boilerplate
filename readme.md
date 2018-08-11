# React + Redux + TypeScript boilerplate

## Tech Stack

Here's a curated list of packages that you should be at least familiar with before starting your awesome project. However, the best way to see a complete list of the dependencies is to check [package.json](https://github.com/sergeypriakhin/react-redux-ts-boilerplate/blob/master/package.json).

### Core

- React
- React Router
- Redux
- Redux Thunk
- Reselect
- CSS Modules

### Unit Testing

- Jest
- Enzyme

### Linting

- TSLint
- Prettier
- Stylelint

### Project Structure

- **build** is where all the built files go, you never touch this except when you need to deploy.
- **src** is where you code.
- **src/components** have shared components, like Button, Input etc.
- **src/modules** handles your state (actions + reducers using ducks file structure).
- **src/pages** are the root level components, ones which are directly mounted on level 1 routes. (Ex. if you have a route called /login that mounts a Login component, then Login.js will be present in pages directory).
- **src/routes** registers the routes.
- **src/stores** initialises the redux store.
- **src/utils** have utilities like your api wrapper, date utils, string utils etc.
- **src/index.tsx** renders the app.
- **config.ts** is where you store your environment variables like api endpoints. Don’t commit this to git.
