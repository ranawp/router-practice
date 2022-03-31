
import { Route, Routes } from 'react-router-dom';
import './App.css';

import About from './components/About/About';
import Countries from './components/Countries/Countries';
import CountryDetail from './components/CountryDetail/CountryDetail';
import FriendDetail from './components/Frienddetail/FriendDetail';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import UserDetails from './components/UserDetail/UserDetails';
// import Posts from './components/Posts/Posts';
import Users from './components/Users/Users';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>Welcome to my fency router</h1>
      <Routes>
        <Route path="/" element={<Home></Home>}>  </Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path='/friend/:friendId' element={<FriendDetail></FriendDetail>}>
        </Route>
        {/* <Route path="/posts" element={<Posts></Posts>}></Route> */}
        <Route path='/users' element={<Users></Users>}>
          <Route path=':userId' element={<UserDetails></UserDetails>}></Route>
        </Route>
        <Route path='/countries' element={<Countries></Countries>} ></Route>
        <Route path='/country/:countryName' element={<CountryDetail></CountryDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
