import "./App.css";
import { Header, Info, Topics, Blog, Testimonials, Footer } from "./components";
import { client } from "./client";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Header />
      <Topics />
      <Info />
      <Blog />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
