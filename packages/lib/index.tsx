// We implement everything in this file for simplicity
import type { FunctionComponent, ReactNode } from "react";


// We expect project to override this with router configuration
// Make sure to export
export interface Register { }


type Route<TPath extends string> = {
    path: TPath;
    component: FunctionComponent;
}

type Routes<TPath extends string> = Route<TPath>[];

type AnyRoutes = Routes<string>;


export function createRoutes<TPath extends string>(routes: Routes<TPath>) {
    // Here we could override routes with lib stuff
    // But here for simplicity, do nothing
    return routes;
}

type RegisteredRoutes = Register extends {
    routes: infer Routes extends AnyRoutes;
} ? Routes : AnyRoutes;

type LinkProps = {
    to: RegisteredRoutes[number]['path'];
    children: ReactNode;
}

export function Link(props: LinkProps) {
    const { to, children } = props;

    return (
        <a href={to} onClick={e => {
            e.preventDefault();

            history.pushState(undefined, '', to);
        }}>
            {children}
        </a>
    )
}

