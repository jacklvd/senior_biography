"use client";

import Image from "next/image";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import EventsPage from "./pages/EventsPage";
import ItemsPage from "./pages/ItemsPage";
import SearchEventsPage from "./pages/SearchEventsPage";
import SearchItemsPage from "./pages/SearchItemsPage";
import EventPage from "./pages/EventPage";
import ItemPage from "./pages/ItemPage";
import TransactionPage from "./pages/TransactionPage";
import MyListPage from "./pages/MyListPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/events" element={<EventsPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/search-events" element={<SearchEventsPage />} />
        <Route path="/search-items" element={<SearchItemsPage />} />
        <Route path="/event/:id" element={<EventPage id={0} />} />
        <Route path="/item/:id" element={<ItemPage id={0} />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/my-list" element={<MyListPage />} /> */}
      </Routes>
    </Router>
  );
};

export { App };

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Router>
        <LandingPage />
      </Router>
    </div>
  );
}
