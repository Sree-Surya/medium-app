import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Appbar from "./components/Appbar";
import Publish from "./components/Publish";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route index path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/blog/:id"
            element={
              <>
                <Appbar />
                <Blog />
              </>
            }
          />
          <Route
            path="/blogs"
            element={
              <>
                <Appbar />
                <Blogs />
              </>
            }
          />
          <Route
            path="/new-blogpost"
            element={
              <>
                <Appbar />
                <Publish />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Appbar />
                <Profile />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
