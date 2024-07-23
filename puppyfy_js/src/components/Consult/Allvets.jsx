import React from "react";
import { useEffect, useState } from "react";
import Doctors from "./Doctors"
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";
import "./Allvets.css";
import axios from "axios";

function Allvets() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState([0]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const movies = await axios.get("http://localhost:3001/consult_db");

    setPopular(movies.data);
    setFiltered(movies.data);
  };

  return (
    <div className="vets">
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
        className="popular-vets"
      >
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Doctors key={movie.item_id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Allvets;
