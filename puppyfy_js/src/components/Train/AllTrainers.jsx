import React from "react";
import { useEffect, useState } from "react";
import Trainers from "./Trainers"
import Filters from "./Filters";
import { motion, AnimatePresence } from "framer-motion";
import "./AllTrainers.css";
import axios from "axios";

function AllTrainers() {
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
      <Filters
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
            return <Trainers key={movie.item_id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default AllTrainers;
