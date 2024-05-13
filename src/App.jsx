import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./styles/App.css";

function App() {
    const pages = import.meta.glob("./pages/**/!(*.test.[jt]sx)*.([jt]sx)",{ eager: true });

    const isAdmin = () => false;
    const isUser = () => false;

    return (
        <BrowserRouter>
            <Router pages={pages} authenticate={{
                admin: isAdmin,
                user: isUser,
            }} />
        </BrowserRouter>
    );
}

export default App;
