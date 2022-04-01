import React from "react"

import ContextProvider from "./src/providers/ContextProvider"

export const wrapRootElement = ( { element } ) => {
  return (
    <ContextProvider>
      { element }
    </ContextProvider>
  )
}
