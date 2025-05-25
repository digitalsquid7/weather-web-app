import Overview from "@/app/widgets/overview";
import SearchBar from "@/app/widgets/search_bar";
import Statistics from "@/app/widgets/statistics";

export default function Home() {
  return (
      <div id="container">
          <SearchBar/>
          <Overview/>
          <Statistics/>
      </div>
  );
}
