import { Routes, Route } from "react-router-dom";
import { BookList } from "./pages/BookList";
import { Book } from "./pages/Book";
import { NewBook } from "./pages/NewBook";
import { BookLayout } from "./BookLayout";

export function BookRoutes() {
  return (
    <>
      <BookLayout></BookLayout>
      <Routes>
        <Route index element={<BookList></BookList>}></Route>
        <Route path=":id" element={<Book></Book>}></Route>
        <Route path="new" element={<NewBook></NewBook>}></Route>
      </Routes>
    </>
  );
}
