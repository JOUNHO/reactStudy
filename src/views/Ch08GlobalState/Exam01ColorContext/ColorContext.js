import React, { useState } from "react";

const ColorContext = React.createContext({
  color:"black",
  setColor: function(color) {}
});
// console.log("흠냐");
// console.log("컬러컨텍스트",ColorContext);

export function ColorContextProvider(props) {
  const [color,setColor] = useState("yellow");
  const value = {
    color: color,
    setColor:setColor
  };
  return (
    <ColorContext.Provider value={value}>
      {props.children}
    </ColorContext.Provider>
  );
}

export default ColorContext;