import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const NavBar = () => (
  <Styles>
    <nav className="nav">
      <ul className="nav-list">
        <Link to="/Feed" className="nav-link"><li>Feed</li></Link>
        <Link to="/Sub-topics" className="nav-link"><li>Sub Topics</li></Link>
        <Link to="/Segments" className="nav-link"><li>Segments</li></Link>
        <Link to="/" className="nav-link"><li>Publishers</li></Link>
      </ul>
    </nav>
  </Styles>
    );


const Styles = styled.div`
    .nav{
        width:25rem;
        height:4rem;
        margin-bottom:1rem;

        
    }
    .nav-list{
        list-style:none;
        display: flex;
        justify-content:space-between;
        padding:0 
    }
    .nav-link{
        text-decoration:none;
        font-size:1.2rem;
        color:#000;
        height:2rem;
        outline:none;

        &:hover{
            color:#61dad1;
        }
        &:active, &:focus {
            color:#61dad1;
            border-bottom: 2px solid #61dad1;

        }
    }


`;
export default NavBar;
