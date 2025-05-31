import './links.css';
import { Home,MessageCircle, Bell,UsersRound,CirclePlus,Settings,LogOut,LogIn } from 'lucide-react';
const Links = ({ icons }) => {

    if (icons) {
        return (
            <div className='icons'>
                <div className="Top-links">
                    <button className="icon-buttons"><Home className='icon' /></button>
                    <button className="icon-buttons"><Bell className='icon' /></button>
                    <button className="icon-buttons"><CirclePlus className='icon' /></button>
                    <button className="icon-buttons"><MessageCircle className='icon' /></button>
                    <button className="icon-buttons"><UsersRound className='icon' /></button>
                </div>
                <div className='divider'></div>
                <div className="Bottom-links">
                    <button className="icon-buttons"><Settings className='icon' /></button>
                    <button className="icon-buttons"><LogOut className='icon' /></button>
                </div>
            </div>
        );
    }

    
    return (
        <div className="links">
            <div>
                <li className='Top-links'>
                    <ul>
                        <button className="nav-buttons">
                            <Home className='icon' />
                            <a href="">Home</a>
                        </button>
                    </ul>
                    <ul>
                        <button className="nav-buttons">
                            <Bell className='icon' />
                            <a href="">Notifications</a>
                        </button>
                    </ul>
                    <ul>
                        <button className="nav-buttons">
                            <CirclePlus className='icon' />
                            <a href="">Post</a>
                        </button>
                    </ul>
                    <ul>
                        <button className="nav-buttons">
                            <MessageCircle className='icon' />
                            <a href="">Messages</a>
                        </button>
                    </ul>
                    <ul>
                        <button className="nav-buttons">
                            <UsersRound className='icon' />
                            <a href="">Groups</a>
                        </button>
                    </ul>
                </li>
            </div>
            <div className='divider'></div>
           <div>
             <li>
                <ul>
                    <button className="nav-buttons">
                        <Settings className='icon'/>
                        <a href="">Settings</a>
                    </button>
                </ul>
                <ul>
                    <button className="nav-buttons">
                        <LogOut className='icon'/>
                        <a href="">Log Out</a>
                    </button>
                </ul>
            </li>
           </div>
        </div>
        )
}

export default Links;