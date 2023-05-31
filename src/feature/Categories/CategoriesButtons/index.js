import React from "react";
import { Link } from "react-router-dom";

const CategoriesButtons = ({ cards }) => {
    return (
      <>
        {cards?.map((card) => {
          return (
            <div key={card} className="buttons" style={{ marginTop: "10px" }}>
              <Link
                to={`/category/${card}`}
                className="btn btn-outline-dark me-2"
              >
                {card || "Example card"}
              </Link>
            </div>
          );
        })}
      </>
    );
};

export default CategoriesButtons;
