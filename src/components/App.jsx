import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
    const [sorted, setSorted] = useState(true);
    return (
        <div className="bg-bg text-xl text-black  min-h-dvh dark:bg-black flex flex-col">
            <Header />
            <Main sorted={sorted} setSorted={setSorted} />
            <Footer />
        </div>
    );
}
