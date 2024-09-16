// import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div className="navcontent">
        <div className="nav">
          <img
            className="logo"
            src="https://www.pngplay.com/wp-content/uploads/7/Nike-Logo-Transparent-Free-PNG.png"
            alt="logo"
          />
          <div className="links">
            <h1>MENU</h1>
            <h1>LOCATION</h1>
            <h1>ABOUT</h1>
            <h1>CONTACT</h1>
          </div>
          <button>LOGIN</button>
        </div>
      </div>
      <div className="maincontent">
        <div className="content">
          <div className="mini">
            <h1>Your Feet </h1>
            <h1>Deserves </h1>
            <h1>The Best</h1>
            <p className="m-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              soluta sit vminima quas sint ratione fugiat
              quaerat unde. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, saepe!
            </p>
            <div className="btn m-1">
              <button className="red">Shop Now</button>
              <button>Explore</button>
            </div>
            <div className="m-1">
              <img className="minipic" src="https://i.pinimg.com/originals/eb/9f/37/eb9f3772c2d90203412a221d6cf044b1.png" alt="" /> 
              <img className="minipic" src="https://clipartcraft.com/images/amazon-logo-transparent-icon-3.png" alt="" />
            </div>
          </div>
          <div className="mini">
            <img className="heroPic"
              src="https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png"
              alt=""
            />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
