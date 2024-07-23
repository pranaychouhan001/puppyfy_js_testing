import React from "react";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";
import "./Products.css";
import axios from "axios";

function Products() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState([0]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const movies = await axios.get("http://localhost:3001/products_db");

    setPopular(movies.data);
    setFiltered(movies.data);
  };

  return (
    <div className="products">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout
        className="popular-movies"
      >
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Movie key={movie.item_id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Products;
