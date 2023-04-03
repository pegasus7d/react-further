import { Routes, Route} from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";


function App() {
  return (
    
      
      <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage/>} />
          <Route path="/new" element={<NewMeetupPage/>} />
          <Route path="/fav" element={<FavoritesPage/>} />
        
      </Routes>
      </Layout>
    
  );
}

export default App;
