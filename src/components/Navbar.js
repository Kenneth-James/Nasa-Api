import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return(
            <header className='navHeader'>
                <div className='navDivContainer'>
                    <nav className='navBar'>
                        <NavLink to='/' exact className='navHome'>
                            Home
                        </NavLink>
                        <NavLink to='/nasapic' className='navPic'>
                            The Stars
                        </NavLink>
                        <NavLink to='/about' className='navAbout'>
                            Why I Love The Stars
                        </NavLink>
                    </nav>
                </div>
            </header>
        )
    }
}

export default NavBar;