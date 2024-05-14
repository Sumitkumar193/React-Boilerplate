import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Router from "./Router";
import "./styles/App.css";

function App() {
    const pages = import.meta.glob("./pages/**/!(*.test.[jt]sx)*.([jt]sx)",{ eager: true });
    const [isAdmin, setIsAdmin] = useState(false);
    const [isUser, setIsUser] = useState(false);

    useEffect(() => {
        // Simulate authentication
        setIsAdmin(false);
        setIsUser(false);
    }, []);

    return (
        <BrowserRouter>
            <Router pages={pages} authenticate={{
                admin: isAdmin,
                user: isUser,
                "products/create": isAdmin,
                "products/:id": isUser,
            }} />
        </BrowserRouter>
    );
}

export default App;
