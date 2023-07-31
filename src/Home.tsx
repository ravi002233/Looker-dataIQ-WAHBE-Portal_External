import React from "react";
import Carousel from "react-material-ui-carousel";

export default function Home() {
  function DataIQ() {
    var items = [
      {
        name: "Engage Data IQ  #1",
        description: "Probably the most random thing you have ever seen!",
        image: (
          <img
            width="75%"
            height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/WAHBE.PNG?token=GHSAT0AAAAAACCENYWADJBAEXQUGQK6AIQAZEVNMFA"
          />
        ),
      },
      {
        name: "Engage Data IQ  #2",
        description: "Probably the most random thing you have ever seen!",
        image: (
          <img
            width="75%"
            height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/WAHBE.PNG?token=GHSAT0AAAAAACCENYWADJBAEXQUGQK6AIQAZEVNMFA"
          />
        ),
      },
      {
        name: "Engage Data IQ  #3",
        description: "Probably the most random thing you have ever seen!",
        image: (
          <img
            width="75%"
            height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/WAHBE.PNG?token=GHSAT0AAAAAACCENYWADJBAEXQUGQK6AIQAZEVNMFA"
          />
        ),
      },
    ];

    return (
      <Carousel>
        {items.map((item, i) => (
          <div style={{ textAlign: "center" }}>{item.image}</div>
        ))}
      </Carousel>
    );
  }

  return (
    <>
      <DataIQ />
    </>
  );
}
