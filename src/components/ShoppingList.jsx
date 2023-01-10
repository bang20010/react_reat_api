import axios from "axios";
import React from "react";

export default class GetShoppingList extends React.Component {
  state = {
    // isLoading: true,
    shoppings: [],
  };
  getShoppingList = async () => {
    // const [data, setData] = useState([]);

    // const ClientID = "aqVTxdIHE0aEDYu1XksO";
    // const ClientSecret = "hFcW9OjDU4";

    const ClientID = process.env.REACT_APP_CLIENT_ID;
    const ClientSecret = process.env.REACT_APP_CLIENT_SECRET;
    const URL = "https://openapi.naver.com/v1/search/shop.json?";

    // try {
    // const {
    //   data: { items },
    // } =
    axios
      .get(URL, {
        params: {
          query: "모자",
          display: 20,
        },
        headers: {
          "X-Naver-Client-Id": `${ClientID}`,
          "X-Naver-Client-Secret": `${ClientSecret}`,
        },
      })
      .then((res) => {
        const getData = res.data;
        this.setState({
          getData,
          //shoppings: items,
          //isLoading: false
        });
      })
      .catch((e) => {});
    console.log(this.state);
  };
  // catch (error) {
  //   if (axios.isAxiosError(error)) {
  //     console.log("error message: ", error.message);
  //     return <div>{error.message}</div>;
  //   } else {
  //     console.log("unexpected error: ", error);
  //     return "An unexpected error occurred";
  //   }
  // }

  // useEffect(() => {
  //   data();
  // }, []);
  //};

  render() {
    const { shoppingData } = this.state;
    return (
      <div className="container">
        {this.state.shoppings.items.map((shoppings) => (
          <div className="ShoppingBox">
            <div className="Image">
              <img src={shoppings.image} alt="" />
            </div>
            <div className="ShoppingData">
              <h3>{shoppings.title}</h3>
              <ul>
                <li>브랜드 : {shoppings.brand}</li>
                <li>가격 : {shoppings.lprice}</li>
                <li>판매사 : {shoppings.mallName}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
