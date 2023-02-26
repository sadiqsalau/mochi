import React, { useContext } from "react";

export const createProvider = (context) => ({
  hook() {
    return useContext(context);
  },
  provider(props) {
    return React.createElement(context.Provider, props);
  },
});
