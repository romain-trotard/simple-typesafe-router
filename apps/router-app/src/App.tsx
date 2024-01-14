import { Link, createRoutes } from '@rainbow/router';

const router = createRoutes([
    {
        path: '/',
        component: () => (<h1>Home page</h1>),
    },
    {
        path: '/about',
        component: () => (<h1>About page</h1>),
    }
]);

declare module '@rainbow/router' {
    interface Register {
        routes: typeof router;
    }
}

function App() {
    return (
        <Link to="/about">Go to about page</Link>
    )
}

export default App
