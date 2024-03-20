import Router from "./Router";
import "./styles/App.css";

function App() {
    const pages = import.meta.glob("./pages/**/*.{jsx,tsx}", { eager: true });

    return (
        <Router pages={pages} />
    );
}

export default App;
