import { useState } from "react";

// Custom hook to manage the state for the clicked item
const useClickedItem = () => {
  const [clickedItem, setClickedItem] = useState(null);

  // Function to handle click on an item
  const handleItemClick = (item) => {
    setClickedItem(item);
  };

  return [clickedItem, handleItemClick];
};

export default useClickedItem;
