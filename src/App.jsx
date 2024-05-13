import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./styles/App.css";

function App() {
    const pages = import.meta.glob("./pages/**/!(*.test.[jt]sx)*.([jt]sx)",{ eager: true });

    return (
        <BrowserRouter>
            <Router pages={pages} />
        </BrowserRouter>
    );
}

export default App;
