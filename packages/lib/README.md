# @rainbow/router

Small package to illustrate the article [Tanstack router wizardry](https://romaintrotard.com/posts/tanstack-router-typescript-wizardry).

It helps to see the power of `interface` in combination with `declare module`.

Thanks to this 2 tools we can make a library full type with the project configuration without using an
utility function like this:

```typescript
import { createRoutes } from '@rainbow/router';

const routes = createRoutes([
  {
    path: '/about',
    component: () => (<h1>About page</h1>),
  }
]);

function App() {
    return (
      <routes.Link to="/about">Go to about page</routes.Link>
    );
}
```

We can directly do:

```typescript
import { createRoutes, Link } from '@rainbow/lib';

const routes = createRoutes([
  {
    path: '/about',
    component: () => (<h1>About page</h1>),
  }
]);

declare module '@rainbow/router' {
  interface Register {
    routes: typeof routes;
  }
}

function App() {
    return (
      <Link to="/about">Go to about page</Link>
    );
}
```


This trick is used by the library [`@tanstack/router`](https://tanstack.com/router/v1).
