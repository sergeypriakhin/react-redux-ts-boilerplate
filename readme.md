# React + Redux + TypeScript boilerplate

## Tech Stack

Here's a curated list of packages that you should be at least familiar with before starting your awesome project. However, the best way to see a complete list of the dependencies is to check [package.json](https://github.com/sergeypriakhin/react-redux-ts-boilerplate/blob/master/package.json).

### Core

- React
- React Router
- Redux
- Redux Thunk
- Reselect
- Styled Components

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
- **src/components** stateless, reusable components, like Button, Input etc.
- **src/modules** stateful parent components.
- **src/stores** initialises the redux store.
- **src/utils** have utilities like your api wrapper, date utils, string utils etc.
- **src/index.tsx** renders the app.
- **config.ts** is where you store your environment variables like api endpoints. Don’t commit this to git.
