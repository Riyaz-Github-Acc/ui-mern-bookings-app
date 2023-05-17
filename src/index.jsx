import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Context
import { SearchContextProvider } from "./context/SearchContex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <SearchContextProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </SearchContextProvider>
);
