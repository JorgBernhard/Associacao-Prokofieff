import './style-header.css';
import MenuIcon from '../../assets/menu-blue.png';
import { useState } from 'react';

export default function NavBar() {
    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className='nav-icon'>
                <img src={MenuIcon} alt='menu icon' onClick={handleSidebar} />
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <span onClick={handleSidebar}></span>
                <div className='nav-menu-items' onClick={handleSidebar}>
                    <div className="right-header">
                      
                    </div>
                    <div className="links-header">
                        <a href='#main'>Associação</a>
                        <a href='#filosofia' >Filosofia</a>
                        <a href='#fotos' >Fotos</a>
                        <a href='#eventos' >Eventos</a>
                    </div>
                </div>
            </nav>
            
        </>
    );
}
