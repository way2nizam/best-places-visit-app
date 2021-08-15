import React from "react";
import "./styles.css";
import { useState } from "react";

const placesDB = {
  india: [
    { name: "tajmahal, agra,uttar pradesh", rating: "4/5" },
    { name: "humayun tomb, new delhi", rating: "4.5/5" },
    { name: "gate of india, mumbai", rating: "4.5/5" },
    { name: "gadi sagar temple, rajasthan", rating: "4/5" },
    { name: "golden temple, amritsar, punjab", rating: "4.5/5" },
    { name: "palolem beach,goa", rating: "4/5" }
  ],

  outside: [
    {
      name: "Singapore",
      rating: "5/5"
    },
    {
      name: "thailand",
      rating: "4.5/5"
    },
    {
      name: "mauritius",
      rating: "5/5"
    },
    {
      name: "maldives",
      rating: "4.5/5"
    },
    {
      name: "dubai",
      rating: "5/5"
    },
    {
      name: "malaysia",
      rating: "4.5/5"
    },
    {
      name: "hawaii",
      rating: "5/5"
    }
  ],
  hooneymoon: [
    {
      name: "Mauritius",
      rating: "5/5"
    },
    {
      name: "Phuket and Krabi, Thailand",
      rating: "5/5"
    },
    {
      name: "Bali",
      rating: "5/5"
    },
    {
      name: "Lucerne and Paris",
      rating: "5/5"
    },
    {
      name: "Maldives",
      rating: "5/5"
    },
    {
      name: "Greece",
      rating: "5/5"
    }
  ],

  none: [
    {
      name: "",
      rating: ""
    }
  ]
};

export default function App() {
  const [selectPlace, setPlace] = useState("none");
  function placeClickHandler(place) {
    setPlace(place);
  }
  return (
    <div className="App">
      <h1> 🌇 best places to visit </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout favourite places to visit in india and outside. Select to get
        started{" "}
      </p>

      <div>
        {Object.keys(placesDB).map((place) => (
          <button
            onClick={() => placeClickHandler(place)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {place}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {placesDB[selectPlace].map((places) => (
            <li
              key={places.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {places.name} </div>
              <div style={{ fontSize: "smaller" }}> {places.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
