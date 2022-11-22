import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import HomePage from './pages/HomePage.js'
import TablePage from './pages/TablePage.js'
import ThirdTablePage from './pages/ThirdTablePage.js'
import DivBordersPage from './pages/DivBordersPage.js'
import UseStatePage from './pages/UseStatePage.js'
// import Employees from './pages/Employees.js'
import Navbar from './Navbar.js'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/tabel' element={<TablePage/>} />
          <Route path='/kolmas-tabel' element={<ThirdTablePage/>} />
          <Route path='/div-borders' element={<DivBordersPage/>} />
          <Route path='/useState' element={<UseStatePage/>} />
          {/* <Route path='/suur-tabel' element={<Employees/>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
