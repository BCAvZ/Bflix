import './App.css';
import {Home} from "./pages/Home/Home";
import {SearchResult} from "./pages/SearchResult/SearchResult";
import {DetailPage} from "./pages/DetailPage/DetailPage";
import {NavBar} from "./components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
        <NavBar/>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/DetailPage" element={<DetailPage/>}/>
            <Route path="/SearchResult" element={<SearchResult/>}/>
        </Routes>
    </div>
  );
}

export default App;
