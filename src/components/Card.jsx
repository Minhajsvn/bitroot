/* eslint-disable react/prop-types */
import "../components/Card.css";
import { useEffect, useState } from "react";

export default function Card({ data, setIsOpen, setId }) {
  const { id, title, thumbnail, content, author, date } = data;

  const [validDate, setDate] = useState("");

  const dateFormat = (date) => {
    const date1 = new Date(date * 1000);
    const options = { month: "short", day: "numeric", year: "numeric" };
    setDate(date1.toLocaleDateString("en-US", options));
  };

  useEffect(() => {
    dateFormat(date);
  }, [date]);

  return (
    <div
      className="card"
      onClick={() => {
        setIsOpen(true);
        setId(id);
      }}
    >
      <img
        className="img"
        src={thumbnail.small}
        alt={title}
        width="100%"
        height="50%"
      />
      <div className="hoverBtn">Learn More</div>
      <div className="roundIcon">
        <div className="lightBlue"></div>
        <div className="yellow"></div>
      </div>
      <div className="cardContent">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <div className="cardDetails">
        <p>
          {author.name} - {author.role}
        </p>
        <p>{validDate}</p>
      </div>
    </div>
  );
}
