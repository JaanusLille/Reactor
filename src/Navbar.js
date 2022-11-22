import { Link, useMatch, useResolvedPath } from "react-router-dom"
import styled from 'styled-components';


const NavbarStyles = styled.div`
* {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
  }
  
  .container {
    margin: 1rem;
    text-align: center;
  }
  
  .nav {
    background-color: #333;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 2rem;
    padding: 0 1rem;
  }
  
  .site-title {
    font-size: 2rem;
  }
  
  .nav ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  
  .nav a {
    color: inherit;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    padding: .25rem;
  }
  
  .nav li.active {
    background-color: #555;
  }
  
  .nav li:hover {
    background-color: #777;
  }
`;
export default function Navbar() {
    return (
        <NavbarStyles>
        <nav className="nav">
          <Link to="/" className="site-title">
              Avaleht
          </Link>
          <ul>
              {/* <CustomLink to="/">Tere tulemast</CustomLink> */}
              <CustomLink to="/tabel">Tabel</CustomLink>
              <CustomLink to="/kolmas-tabel">Kolmas-tabel</CustomLink>
              <CustomLink to="/div-borders">Div-borders</CustomLink>
              <CustomLink to="/useState">useState</CustomLink>
              {/* <CustomLink to="/suur-tabel">suur tabel</CustomLink> */}
          </ul>
        </nav>
        </NavbarStyles>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}