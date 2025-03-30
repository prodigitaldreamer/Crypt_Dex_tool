import React, { useState, useEffect, useRef } from "react";
import { checkImg } from "../../utils/funcs";
import { svg2img } from "../../utils/randomAvatar";
import { removeW } from "../../utils/funcs";

const TopToken = ({ itemData }) => {
  const [imageExists, setImageExists] = useState(false);
  const tokenRef = useRef(null);

  // useEffect(() => {
  //   checkImg(
  //     `https://assets.thetatoken.org/tokens/${itemData.symbol.toLowerCase()}.png`
  //   )
  //     .then((exists) => {
  //       setImageExists(exists);
  //     })
  //     .catch((error) => {
  //       console.error("Error checking image:", error);
  //       setImageExists(false);
  //     });
  // }, [itemData.symbol]);

  useEffect(() => {
    const isOverflowed =
      tokenRef.current.scrollWidth > tokenRef.current.clientWidth;
    if (isOverflowed) {
      tokenRef.current.classList.add("overflowed");
    } else {
      tokenRef.current.classList.remove("overflowed");
    }
  }, [itemData.symbol]);

  return (
    <div ref={tokenRef} className="token-item font-header top-token">
      <div className="token-element">{itemData.num}</div>
      <img
        className="token-element"
        src={
          itemData.logo
            ? `https://assets.thetatoken.org/tokens/${itemData.logo}`
            : svg2img(itemData)
        }
        alt={itemData.symbol}
        style={
          imageExists
            ? { width: ".9rem" }
            : { width: ".9rem", borderRadius: "50%" }
        }
      />
      <div className="token-element">{removeW(itemData.symbol)}</div>
      <div className="token-element-rate" style={{ color: "#449782" }}>
        {"+" + itemData.riserate + "%"}
      </div>
    </div>
  );
};

export default TopToken;
