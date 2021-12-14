import React from 'react';
import HeaderLogo from './SVG/HeaderLogo';
import UserLogo from './SVG/UserLogo';
import Arrow from './SVG/Arrow';

const Header = () => {
    return (
        <header className="header">

            <div className='header__wrapper'>
                <div className='header__logo'>
                    <a href='/' className='header__logo_link'>
                        <HeaderLogo/>
                    </a>
                </div>

                <div className='header__body'>
                    <div className='header__title'>
                        <span className='header__title_content'>Tasks</span>
                    </div>
                    <div className='header__user'>
                        <div className='header__user_name'>
                            Leanne Graham
                        </div>
                        <div className='header__user_logo'>
                            <UserLogo/>
                        </div>
                        <div className='header__user_arrow'>
                            <Arrow/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;