import Overview from "@/app/widgets/overview";
import SearchBar from "@/app/widgets/search_bar";
import Statistics from "@/app/widgets/statistics";
import cities from '@/lib/cities';

export default function Home() {
  return (
      <div id="container">
          <SearchBar cities={cities}/>
          <Overview/>
          <Statistics/>
      </div>
  );
}
