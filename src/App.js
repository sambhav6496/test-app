import "./App.css";
import { data } from "./api/index";
import List from "./components/List";
import { useState, useEffect } from "react";

function App() {
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const response = data().then((data) => {
      setListData(data);
      setLoading(false);
    });
  }, [listData]);
  if (loading) {
    return (
      <>
        <h1>loading</h1>
      </>
    );
  } else {
    return (
      <>
        <div className="App">
          {listData.map((abc) => {
            const { id, name, lastName } = abc;
            return (
              <>
                {" "}
                <List
                  name={name}
                  lastName={lastName}
                  key={id}
                  listItemId={id}
                />
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default App;
