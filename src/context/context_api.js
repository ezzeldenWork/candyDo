import {createContext, useState} from "react";

export const ContextApi = createContext();

export const ContextComponant = (props) => {
  const [dodo, setDodo] = useState([]);



  return (
    <div>
      <ContextApi.Provider value={[dodo, setDodo]}>
        {props.children}
      </ContextApi.Provider>
    </div>
  );
};
