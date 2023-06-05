import React from "react";
import Card from "./common/Card";

const HighLights = (props) => {
  return (
    <div className="flex flex-col content-baseline flex-wrap gap-6 mx-188px pt-14 pb-20">
      <p className="text-rich-black font-bold">HighLights</p>
      <div className="flex justify-evenly gap-4">
        {props.highLights.map((highlight, key)  => {
          return (
            <Card
              key={key}
              image={highlight.image}
              title={highlight.title}
              description={highlight.description}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default HighLights;
