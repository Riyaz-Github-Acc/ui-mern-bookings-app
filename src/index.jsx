import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Context
import { SearchContextProvider } from "./context/SearchContex.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthContextProvider>
            <SearchContextProvider>
                <App />
            </SearchContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
);
