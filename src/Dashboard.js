import 'antd/dist/antd';
import "./App.css"
import { Menu } from 'antd'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import { HomeOutlined, DashboardOutlined, UserOutlined, PoweroffOutlined, UnorderedListOutlined } from '@ant-design/icons';
import Logout from './Logout';
function Dashboard(loginData) {

    console.log("loginData", loginData)
  
    // const menuItems = [
    //     { label: 'Home', path: '/' ,icon: <HomeOutlined />},
    //     { label: 'Dashboard', path: '/dashboard',icon: <DashboardOutlined />  },
    //     { label: 'User List', path: '/userList' },
    //     { label: 'Profile', path: '/profile' },
    //     { label: 'SignOut', path: '/signOut' }
    // ]

    return (
        <div >
            <Headers loginData={loginData}></Headers>
            <div style={{ display: "flex", flexDirection: "row", flex: 1, height: "84vh" }}>
                <SideMenu></SideMenu>
                <Content loginData={loginData}></Content>
            </div>
            <Footer></Footer>
        </div>
        // <div style={{ display: "flex", flexDirection: "row" }}>

        //     <Content />
        // </div>
    )
}

function Headers({ loginData }) {
    const navigate = useNavigate();

    const handleSignOut = () => {
        // Perform sign-out actions here, such as clearing session data, etc.
        // Then navigate to the logout page or any other appropriate page
        navigate('/signOut');
    };
    
    return (
        <div className='header'>
            {/* Use loginData here */}
            {loginData && <div>Hello, {loginData.username}</div>}
            <div style={{ marginLeft: 'auto', marginRight: '20px', alignSelf: 'center' }}  >
            <button onClick={handleSignOut} className="sign-out-button">
                    <PoweroffOutlined /> Sign Out
                </button>
            </div>
        </div>
    )
}
function SideMenu() {
    const navigateComponent = useNavigate();

  const handleMenuClick = (key) => {
    console.log("Menu item clicked:", key);
    navigateComponent(key);
  };
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Menu
             onClick={({ key }) => handleMenuClick(key)}
                items={[
                    { label: 'Dashboard', path: '/', key: "/", icon: <DashboardOutlined /> },
                    { label: 'Home', path: '/home', key: "/home", icon: <HomeOutlined /> },
                    {
                        label: 'User List', path: '/userList', key: "/userList", icon: <UnorderedListOutlined />
                        , children: [
                            { label: 'Active user', key: "/activeUser" },
                            { label: 'InActive user', key: "/inActiveUser" }
                        ]
                    },
                    { label: 'Profile', path: '/profile', key: "/profile", icon: <UserOutlined /> },
                    // { label: 'Sign Out', path: '/signOut', key: "/signOut", icon: <PoweroffOutlined />, danger: true }
                ]} >
                {/* {menuItems.map(item => (
               <Menu.Item key={item.label}>
                   <Link to={item.path}>{item.label}</Link>
               </Menu.Item>
           ))} */}


            </Menu>
        </div>

    )
}
function Footer() {
    return (
        <div className='footer'>
            Footer
        </div>
    )

}

function Content({ loginData }) {
    console.log("loginData", loginData)

    return (
        <div className='contentBody'>
            <Routes>
                <Route path="/" element={<DashboardComponent />} />
                <Route path="/home" element={<Home />} />
                <Route path="/activeUser" element={<div>Active  Users</div>} />
                <Route path="/inActiveUser" element={<div>InActive Users</div>} />
                <Route path="/profile" element={<div>Profile</div>} />
                {/* <Route path="/signOut" element={<Logout/>} /> */}
            </Routes>
        </div>
    )
}
function DashboardComponent() {
    return (
        <div>
              <div className='pageHeader'>
                Dashboard
            </div>
            <div className='card'>
          
            <div className='card-body'>
                <div className="">

                    <table className='table table-responsive table-striped'>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Anom</td>
                            <td>19</td>
                            <td>Male</td>
                        </tr>
                        <tr>
                            <td>Megha</td>
                            <td>19</td>
                            <td>Female</td>
                        </tr>
                        <tr>
                            <td>Subham</td>
                            <td>25</td>
                            <td>Male</td>
                        </tr>
                        </tbody>
                    </table>


                </div>
            </div>
        </div>
        </div>
        
        
    )

}
function Home() {
    return (
        <div>Home Page</div>
    )

}

export default Dashboard
