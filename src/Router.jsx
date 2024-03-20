import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';

export default function router({pages}) {
    const routes = [];

    for (const path of Object.keys(pages)) {
        const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1];
        if (!fileName) {
            continue;
        }

        const normalizedPathName = fileName.includes("$")
            ? fileName.replace("$", ":")
            : fileName.replace(/\/index/, "");

        routes.push({
            path:
                fileName === "index"
                    ? "/"
                    : `/${normalizedPathName.toLowerCase()}`,
            Element: pages[path].default,
            loader: pages[path]?.loader,
            action: pages[path]?.action,
            ErrorBoundary: pages[path]?.ErrorBoundary,
        });
    }

    routes.push({
        path: '*',
        Element: NotFound,
    });

    const router = createBrowserRouter(
        routes.map(({ Element, ErrorBoundary, ...rest }) => ({
            ...rest,
            element: <Element />,
            ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
        }))
    );

    return (
        <RouterProvider router={router} />
    );
}