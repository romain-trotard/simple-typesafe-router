import { Link, createRoutes } from '@rainbow/router';

const router = createRoutes([
    {
        path: '/secondAppHome',
        component: () => (<h1>Home page</h1>),
    },
    {
        path: '/secondAppAbout',
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
        <Link to="/secondAppHome">Go to about page</Link>
    )
}

export default App
