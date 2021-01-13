import { useState, useEffect } from "react";
import Axios from "axios";
import NumberFormat from "react-number-format";
import moment from "moment";
import "./App.css";

function App() {
  const [bitcoin, setBitcoin] = useState([]);

  const getCoin = async () => {
    const response = await Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    );
    console.log(response.data);
    setBitcoin(response.data);
  };

  useEffect(() => {
    getCoin();
  }, []);

  const renderCoin = () => {
    return bitcoin.map((bit) => {
      return (
        <ul key={bit.id}>
          <img src={bit.image} alt={bit.name} style={{ height: "50px" }} />
          <li>{bit.name}</li>
          <li>
            <strong>Current Price: </strong>{" "}
            <NumberFormat
              value={bit.current_price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </li>
          <li>
            <strong>Low of the last 24 hours: </strong>{" "}
            <NumberFormat
              value={bit.low_24h}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </li>
          <li>
            <strong>High of the last 24 hours: </strong>{" "}
            <NumberFormat
              value={bit.high_24h}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </li>
          <li>
            <strong>Last Updated: </strong>
            {moment(bit.last_updated).format("MM/DD/YYYY")}
          </li>
        </ul>
      );
    });
  };
  return (
    <div className="App">
      <h1>Bitcoin Data</h1>
      {renderCoin()}
    </div>
  );
}

export default App;
