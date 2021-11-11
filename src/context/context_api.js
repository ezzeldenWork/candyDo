import {createContext, useState} from "react";

export const ContextApi = createContext();

export const ContextComponant = (props) => {
  const [dodo, setDodo] = useState([
    {
      id: 1,
      imge: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      doName: "doto1",
      typeDodo: "sa",
      important: true,
      very: false,
      color: "red",
      start: "10/2/2000",
      end: "25/8/2022",
      desire: "linmsoodfsnsd",
      benefit: "takeCandy ",
      prize: "eat Piza",
      note: "lmaohausdhasdoih",
    },
    {
      id: 2,
      imge: "https://images.unsplash.com/photo-1633113216120-53ca0a7be5bc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      doName: "doto2",
      typeDodo: "sa",
      important: true,
      very: true,
      color: "blue",
      start: "50/2/2203",
      end: "37/5/2055",
      desire: "kwuhuwe",
      benefit: "mate ",
      prize: "Drink Water",
      note: "0quweihq",
    },
  ]);

  console.log(dodo);

  return (
    <div>
      <ContextApi.Provider value={[dodo, setDodo]}>
        {props.children}
      </ContextApi.Provider>
    </div>
  );
};
