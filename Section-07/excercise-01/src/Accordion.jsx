import React from "react";
import AccordionItem from "./AccordionItem";
const Accordion = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem key={i} title={el.title} text={el.text} num={i} />
      ))}
    </div>
  );
};

export default Accordion;
