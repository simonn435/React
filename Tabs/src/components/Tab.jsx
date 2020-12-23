import React, { useState, useEffect } from "react";
import TabButtons from "./TabButtons";
import TabInfo from "./TabInfo";
import Loading from "./Loading";

const Tab = () => {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    const res = await fetch("https://course-api.com/react-tabs-project");
    const data = await res.json();
    setInfo(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const setVal = (index) => {
    setValue(index);
  };

  return (
    <section>
      <div>
        <h1>Experience</h1>
        <div className="line"></div>
      </div>
      <div className="tab-container">
        <TabButtons info={info} setVal={setVal} />
        <TabInfo info={info} value={value} />
      </div>
    </section>
  );
};

export default Tab;
