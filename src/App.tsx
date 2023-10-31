import { useState } from "react";
import DelButton from "./components/DelButton";
import ChangeName from "./components/ChangeName";
import ArchivedButton from "./components/ArchivedButton";
import RouteButtons from "./components/RouteButtons";
import Items from "./components/Items";
import AddButton from "./components/AddButton";

const App = () => {
  const [ShopListName, onNameChange] = useState("Shop ListName");
  const [Archived, onStateChange] = useState(false);
  const [itemList, onItemChanged] = useState([]);

  const handleOnItemSelect = (item: string, index: number) => {
    const updatedItemList = itemList.filter((_, i) => i !== index);
    onItemChanged(updatedItemList);
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1>{ShopListName}</h1>
            <p>
              Owner: You <DelButton></DelButton>
            </p>
          </div>
          <div className="col">
            <div className="row">
              <p>
                {ShopListName} <ChangeName></ChangeName>
              </p>
            </div>
            <div className="row">
              <p>ShopListID</p>
            </div>
            <div className="row">
              <p>Owner: You</p>
            </div>
            <div className="row">
              <p>
                Archived:
                <ArchivedButton></ArchivedButton>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <RouteButtons>Members</RouteButtons>
          </div>
          <div className="col">
            <RouteButtons>ResolvedItems</RouteButtons>
          </div>
        </div>
        <div className="row">
          <Items
            items={itemList}
            heading="Items"
            onSelectItem={handleOnItemSelect}
          ></Items>
        </div>
        <div className="row">
          <AddButton></AddButton>
        </div>
      </div>
    </>
  );
};

export default App;
