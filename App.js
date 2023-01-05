import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import { ProductListPage } from "./ProductListPage";
import { ProductsSinglePage } from "./ProductsSinglePage";
import { ProductCreatePage } from "./ProductCreatePage";
import { ProductsModPage } from "./ProductsModPage";
import { ProductDelPage } from "./ProductDelPage";
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Products</span>
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to={'/uj-product'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Új termék</span>
              </NavLink>
              </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" exact element={<ProductListPage />} />
        <Route path="/products/:productsId" exact element={<ProductsSinglePage />} />
        <Route path="/uj-product" exact element={<ProductCreatePage />} />
        <Route path="/mod-products/:productsId" exact element={<ProductsModPage />} />
        {<Route path="/del-products/:productsId" exact element={<ProductDelPage />} />}
      </Routes>
    </Router>
  );
}

export default App;
