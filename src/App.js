import { Routes, Route} from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";
function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetupsPage/>} />
          <Route path="/new" element={<NewMeetupPage/>} />
          <Route path="/fav" element={<FavoritesPage/>} />
        
      </Routes>
    </div>
  );
}

export default App;
