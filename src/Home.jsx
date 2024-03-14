import supabase from "./config/supabaseClient";
import { useEffect, useState } from "react";

import Card from "./components/Card";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState(null);

  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [rating, setRating] = useState("");
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("smoothie").select();

      if (error) {
        setError("COULD NOT CONNECT TO DATABASE");
        setTasks(null);
      }

      if (data) {
        setError(null);
        setTasks(data);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
  }, []);

  const createTask = async (e) => {
    e.preventDefault();

    if (!title || !method || !rating) {
      setFormError("Please Input!!");
      return;
    }

    await supabase.from("smoothie").insert([{ title, method, rating }]);

    setFormError("DATA SAVED");
    setTitle("");
    setMethod("");
    setRating("");
  };

  return (
    <>
      <h1>HELLO</h1>
      <span> {formError}</span>

      <form onSubmit={createTask}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="method">Method: </label>
          <input
            type="text"
            id="method"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="rating">Rating: </label>
          <input
            type="text"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>

        <button type="submit">Save</button>
      </form>

      {tasks && (
        <div>
          {tasks.map((item) => (
            <Card key={item.id} smoothie={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
