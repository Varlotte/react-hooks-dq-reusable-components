/* 
Write an abstracted component that can be used in place of InventoryTile AND ShopTile

Consider what the tiles have in common and what they do not: 
- For things that are the same, copy and pasting works just fine! 
- For things that are different, consider how you might make use of props and JSX to have the same component behave differently when rendered by different parents 
*/

import React from "react";

function PotionTile({ potion, sell, addToInventory, children }) {
  const onClickHandler = potion
    ? () => sell(potion.id)
    : () => addToInventory(potion.id);

  return (
    <div className="card">
      <div onClick={onClickHandler} className="image-wrapper">
        <img
          className="image"
          alt={potion ? potion.name : ""}
          src={potion ? potion.image_url : "empty_image_url"}
        />
      </div>
      {children}
    </div>
  );
}

export default PotionTile;
