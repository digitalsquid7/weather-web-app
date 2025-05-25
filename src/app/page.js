import cities from '@/lib/cities';
import App from "@/app/widgets/app";

export default function Home() {
  return (
      <div id="container">
          <App cities={cities}/>
      </div>
  );
}
