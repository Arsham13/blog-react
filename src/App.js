import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/AboutUs";
import ArticlePage from "./pages/articlePage/ArticlePage";
import CreateArticle from "./pages/createArticle/CreateArticle";
import NotFound from "./pages/404/NotFound";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/article/:id" element={<ArticlePage />} />
                {/* روت داینامیک -> :id */}
                <Route path="/create-article" element={<CreateArticle />} />
            </Routes>
        </div>
    );
}

export default App;
