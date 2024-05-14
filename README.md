# React-Boilerplate

This project is a boilerplate for React applications. It includes a minimal setup with several key libraries and features to kickstart your React development.

## Features

- **Vite**: This project uses [Vite](https://vitejs.dev/) for a lean and fast frontend build tool. It provides features like hot module replacement and esbuild-powered fast bundling.
- **Recoil**: State management is handled by [Recoil](https://recoiljs.org/), a flexible and efficient React state management library.
- **Zod**: [Zod](https://github.com/colinhacks/zod) is used for schema validation, providing a way to ensure your data matches the expected format.
- **Folder-based routing**: The project uses folder-based routing for a clear and intuitive routing structure. It also includes support for authenticated routes, protecting certain routes based on user authentication status.
- **Axios with Interceptor**: Network requests are made using [Axios](https://github.com/axios/axios), a promise-based HTTP client. An interceptor is set up to handle request and response operations, such as adding an authentication token to requests or handling errors globally.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Sumitkumar193/React-Boilerplate.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Usage

### Authenticated Routes

This project supports authenticated routes, which are only accessible to users who are authenticated. This is achieved by using a custom `Router` component that takes an `authenticate` prop. This prop is an object where the keys are the names of the routes and the values are booleans indicating whether the user is authenticated for that route.

In the `App.jsx` file, we simulate authentication by setting the `isAdmin` and `isUser` state variables:

```jsx
const [isAdmin, setIsAdmin] = useState(false);
const [isUser, setIsUser] = useState(false);
```

Make sure to update these variables based on your authentication logic. For example, you could check if the user is logged in and set the state variables accordingly.

#### Protect All Routes in a Folder

For example, if you have a route that should only be accessible to authenticated users, you can set the `isUser` key to `true`:

```jsx
App.jsx:

<Router pages={pages} authenticate={{
    "admin": isAdmin,
    "user": isUser,
}} />
```

By setting `isUser` to `true`, the `/user` route will only be accessible if the `isUser` state variable is `true`.

#### Protect Single Routes
For protection of single routes in a folder-based routing system, You can pass routes names in the `authenticate` prop of the `Router` component.

```jsx
App.jsx:
<Router pages={pages} authenticate={{
    "products/create": isAdmin,
}} />
```
By setting `isAdmin` to `true`, the `/products/create` route will only be accessible if the `isAdmin` state variable is `true`.

#### Protection of Dynamic Routes
For protection of dynamic routes in a folder-based routing system, You can pass routes names in the `authenticate` prop of the `Router` component.

```jsx
App.jsx:
<Router pages={pages} authenticate={{
    "products/:id": isUser,
}} />
```


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/) License