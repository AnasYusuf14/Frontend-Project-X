import SearchInput from "@/components/shared/SearchInput/searchInput";
import SearchBar from "../../../shared/SearchBar/SearchBar";
import DiscoverNewLists from "./components/ListItem";
import YourLists from "./components/YourLists";

const Lists = () => {
  return (
    <div className="flex-1 text-white">
      <SearchInput />
      <DiscoverNewLists />
      <YourLists />
    </div>
  );
};

export default Lists;
