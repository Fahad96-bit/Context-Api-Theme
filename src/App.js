import "./App.css";
import {
  Route,
  Routes,
  Link,
  useRoutes,
  NavLink,
  useLocation,
} from "react-router-dom";
import { Home } from "./pages/Home";
import "./styles.css";
import { BookList } from "./pages/BookList";
import { Book } from "./pages/Book";
import { NewBook } from "./pages/NewBook";
import { NotFound } from "./pages/NotFound";
import { BookLayout } from "./BookLayout";
import { BookRoutes } from "./BookRoutes";

function App() {
  const location = useLocation();
  console.log("loc", location);
  //An alternate way of writing routes without JSX syntax

  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <NavLayout></NavLayout>,
  //     children: [
  //       {
  //         index: true,
  //         element: <Home></Home>,
  //       },
  //       {
  //         path: "about",
  //         element: <About></About>,
  //       },
  //       {
  //         path: "contact",
  //         element: <Contact></Contact>,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>} />

        <Route path="/books/*" element={<BookRoutes></BookRoutes>} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
        {/* <Route path="/books" element={<BookLayout></BookLayout>}>
          <Route index element={<BookList></BookList>}></Route>
          <Route path=":id" element={<Book></Book>}></Route>
          <Route path="new" element={<NewBook></NewBook>}></Route>
        </Route> */}
        {/* <Route path="/books" element={<BookList></BookList>} />
        <Route path="/book/:id" element={<Book></Book>} />
        <Route path="/book/new" element={<NewBook></NewBook>} />
        <Route path="*" element={<NotFound></NotFound>}></Route> */}
      </Routes>
    </>
  );
}

export default App;
