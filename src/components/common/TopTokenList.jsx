import React, { useEffect, useRef, useState } from "react";
import "./style.css"; // Import your CSS file
import TopToken from "./TopToken"; // Import the TopToken component
import classNames from "classnames";

const TopTokenList = ({ tokenList }) => {
  const listRef = useRef(null);
  const [isOverflowed, setIsOverFlowed] = useState(false);

  useEffect(() => {
    const listElement = listRef.current;
    setIsOverFlowed(listElement.scrollWidth > listElement.clientWidth);
  }, [tokenList, isOverflowed]);

  return (
    <div ref={listRef} className="tokenlist-body">
      <div className={classNames({ tokenlist: 1, overflowed: isOverflowed })}>
        {tokenList.map((item, index) => (
          <TopToken key={index} itemData={item} />
        ))}
      </div>
    </div>
  );
};

export default TopTokenList;
