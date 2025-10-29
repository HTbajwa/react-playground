import React, { useState } from "react";

export const useToogle = (initialValue = false) => {
  const [toggle, settoggle] = useState(initialValue);
  const func = () => {
    settoggle((prev)=>!prev);
  };

  return[toggle, func];
};
