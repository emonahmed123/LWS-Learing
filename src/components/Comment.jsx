import { useEffect, useState } from "react";
import { fetchComments } from "../utils/fecthCommes";

const Comment = () => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    let ingnored = false;

    async function fetchData() {
      const data = await fetchComments();
      setComment(data);
      if (!ingnored) {
        console.log(ingnored);
        setComment(data);
      }
    }
    fetchData();
    return () => {
      ingnored = true;
    };
  }, []);

  return (
    <div>
      <ul>
        {comment.map((com) => (
          <li key={com.id}>
            <p>{com.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comment;
