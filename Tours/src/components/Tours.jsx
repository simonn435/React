import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tour from "./Tour";

const Tours = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeItem = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    try {
      const res = await fetch("https://course-api.com/react-tours-project");
      const data = await res.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div className="container">
      {tours.length === 0 ? <h3>No tours</h3> : <h3>Our tours</h3>}
      <div className="line"></div>
      <Tour tours={tours} removeItem={removeItem} />
      {tours.length === 0 ? (
        <button className="btn-refresh" onClick={fetchData}>
          Refresh
        </button>
      ) : null}
    </div>
  );
};

export default Tours;
