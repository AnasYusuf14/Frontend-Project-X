import SearchBar from "../../../shared/SearchBar/SearchBar";
import DiscoverNewLists from "./components/ListItem";
import YourLists from "./components/YourLists";

const Lists = () => {
  return (
    <div className="min-h-screen text-white">
      <SearchBar />
      <DiscoverNewLists />
      <YourLists />
    </div>
  );
};

export default Lists;
