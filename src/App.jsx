// React Router Dom
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Layout
import { Header, Footer } from "./layout/LayoutIndex";

// Pages
import { Home, Hotel, List } from "./pages/PagesIndex";

// CSS
import "./App.scss";

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },

            {
                path: "/hotels",
                element: <List />,
            },

            {
                path: "/hotels/:id",
                element: <Hotel />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
