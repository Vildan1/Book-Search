import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context';
import './index.css';
import Home from './pages/Home/Home';
import Lists from "./components/BookLists/List";
import BooksDetails from "./components/BooksDetails/Details";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "book" element = {<Lists />} />
          <Route path = "/book/:id" element = {<BooksDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
