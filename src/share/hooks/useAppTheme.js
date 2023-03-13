import React from "react"

export function useFunction(name = "") {
  const functionCollection = React.useRef({ name: undefined });

  const addFunction = (name = "", funcRef = undefined) => {
    if(name && funcRef) {
      functionCollection.current = Object.assign({}, functionCollection.current, { name: funcRef });
    }
  }

  return [addFunction, functionCollection.current[name]];
}