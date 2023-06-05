import React, { useEffect, useState } from "react";
import HighLights from "./Highlights";
import Categories from "./Categories";
import TravelGuide from "./TravelGuide";
import AppConstants from "../common/const";

const Content = () => {
  const [highLights, setHighlights] = useState([]);
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${AppConstants.baseUrl}v1/highlights`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setHighlights(json);
      })
      .catch((error) => console.log(error));

    fetch(`${AppConstants.baseUrl}v1/categories`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setCategories(json);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="max-h-[calc(100vh-5rem)] overflow-y-auto">
      <HighLights highLights={highLights}></HighLights>
      <div className="bg-light">
        <div className="flex flex-row mx-188px pt-10 pb-20 gap-8">
          <Categories categories={categories}></Categories>
          <TravelGuide></TravelGuide>
        </div>
      </div>
    </div>
  );
};

export default Content;
