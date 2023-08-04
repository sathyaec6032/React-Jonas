import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
const Accordion = ({ data }) => {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          key={i}
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        key="Test 1"
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="Test 1"
        num={22}
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusable</li>
          <li>Place state efficiently.</li>
        </ul>
      </AccordionItem>
    </div>
  );
};

export default Accordion;
