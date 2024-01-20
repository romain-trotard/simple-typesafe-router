import { Link, createRoutes } from '@rainbow/router';

const router = createRoutes([
    {
        path: '/secondHome',
        component: () => (<h1>Home page</h1>),
    },
    {
        path: '/secondAbout',
        component: () => (<h1>About page</h1>),
    }
]);

declare module '@rainbow/router' {
    interface Register {
        routes: typeof router;
    }
}

function SecondApp() {
    return (
        <Link to="/secondAbout">Go to about page</Link>
    )
}

export default SecondApp

