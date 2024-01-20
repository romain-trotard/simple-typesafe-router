import { Link, createRoutes } from '@rainbow/router';

const router = createRoutes([
    {
        path: '/firstHome',
        component: () => (<h1>Home page</h1>),
    },
    {
        path: '/firstAbout',
        component: () => (<h1>About page</h1>),
    }
]);

declare module '@rainbow/router' {
    interface Register {
        routes: typeof router;
    }
}

function FirstApp() {
    return (
        <Link to="/firstAbout">Go to about page</Link>
    )
}

export default FirstApp

