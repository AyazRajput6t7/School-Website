import "./Hero.css";
import React from "react";
import Prof1 from "../../assets/profile-1.jpg";
import Prof4 from "../../assets/profile-4.jpg";
import Prof2 from "../../assets/profile-2.jpg";
import Prof3 from "../../assets/profile-3.jpg";
import Prof6 from '../../assets/profile-7.jpg'
import Prof5 from "../../assets/profile-5.jpg";
import Prof8 from "../../assets/profile-8.jpg";
import Prof9 from "../../assets/profile-9.jpg";
import Prof10 from "../../assets/profile-10.jpg";
import Prof11 from "../../assets/profile-11.jpg";
import Prof12 from "../../assets/profile-12.jpg";
import Prof13 from "../../assets/profile-13.jpg";
import Prof14 from "../../assets/profile-14.jpg";
import Feed1 from '../../assets/feed-1.jpg'
import Feed2 from '../../assets/feed-2.jpg'
import Feed3 from '../../assets/feed-3.jpg'
import Feed4 from '../../assets/feed-4.jpg'
import Feed5 from '../../assets/feed-5.jpg'
import Feed6 from '../../assets/feed-6.jpg'
import Feed7 from '../../assets/feed-7.jpg'
import { IoHome } from "react-icons/io5"
import { PiCompassLight } from "react-icons/pi";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { IoIosColorPalette } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { CiShare2 } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
const Hero = () => {

 
  
  return (
    <div className="main">
    <div className="container">
      {/* ======================  Left ================================ */}

      <div className="left">
        <a className="profile">
          <div className="profile-photo">
            <img src={Prof1} alt="mee" />
          </div>

          <div className="handle">
            <h4>Aiza Khan</h4>
            <p className="text-muted">@ezaa</p>
          </div>
        </a>

        {/* ========================= SideBar =======================*/}
        <div className="side-bar" >
          <a href="#" className="menu-item active" >
            <span  >
            <IoHome />
            </span>{" "}
            <h3>Home</h3> </a>
            <a className="menu-item " href="#explore">
              {" "}
              <span>
                <PiCompassLight />
              </span>{" "}
              <h3>Explore</h3>{" "}
            </a>
            <a className="menu-item " id="notification">
              <span>
                <FaBell /><small className="notification-count">9+</small>
              </span>{" "}
              <h3>Notifications</h3>

              {/* ===================== Notification Popup ======================== */}
              <div className="notification-popup">
                <div>
                <div className="profile-photo">
                    <img src={Prof4} alt="prof2" />
                </div>
                <div className="notification-body">
                    <b>Bill gates</b> accepted your friend request
                    <small className="text-muted">2 hours ago</small>
                </div>
                </div>
                <div>
                <div className="profile-photo">
                    <img src={Prof2} alt="prof2" />
                </div>
                <div className="notification-body">
                    <b>Maryium Nawaz </b> Likes your Post
                    <small className="text-muted">4 hours ago</small>
                </div>
                </div>
                <div>
                <div className="profile-photo">
                    <img src={Prof3} alt="prof2" />
                </div>
                <div className="notification-body">
                    <b>Sundar Pichai</b> reacted to your post
                    <small className="text-muted">9 hours ago</small>
                </div>
                </div>
                <div>
                <div className="profile-photo">
                    <img src={Prof5} alt="prof2" />
                </div>
                <div className="notification-body">
                    <b>Jeff Bezos</b> sent you a message request
                    <small className="text-muted">8 hours ago</small>
                </div>
                </div>
                <div>
                <div className="profile-photo">
                    <img src={Prof6} alt="prof2" />
                </div>
                <div className="notification-body">
                    <b>Mark zuckerburg</b> sent a friend request
                    <small className="text-muted">4 hours ago</small>
                </div>
                </div>
                <div>
                <div className="profile-photo">
                    <img src={Prof8} alt="prof2" />
                </div>
                <div className="notification-body">
                    <b>Johny Sins</b> want to go on dinner with you
                    <small className="text-muted">1 day ago</small>
                </div>
                </div>
              </div>
            </a>


            {/* ================== Notification POPUP END ================================== */}
            <a className="menu-item" id="messages-notifications">
              <span>
                <FaRegEnvelope /> <small className="messages-count">6</small>
              </span>{" "}
              <h3>Messages</h3>
            </a>
            <a className="menu-item" href="#bookmarks">
              <span>
                <FaRegBookmark />
              </span>{" "}
              <h3>Bookmarks</h3>
            </a>
            <a className="menu-item" href="#analytics">
              <span >
                <BsGraphUp />
              </span>{" "}
              <h3>Anakytics</h3>{" "}
            </a>
            <a className="menu-item" href="#theme">
              <span>
                <IoIosColorPalette />
              </span>{" "}
              <h3>Theme</h3>
            </a>
            <a className="menu-item " href="#settings">
              <span>
                <IoSettings />
              </span>{" "}
              <h3>Settings</h3>{" "}
            </a>
         
        </div>
             {/* ============================= End of SideBar ================================= */}

      <label for="create-post" className="btn btn-primary">Create Post</label>
      </div>
 
   {/* ========================= End of LEft =======================*/}


      {/* ========================= Middle =======================*/}

      <div className="middle">

  {/* =============================== STORIES =============================== */}
  <div className="stories">
    <div className="story">
      <div className="profile-photo">
        <img src={Prof1} alt="" />
      </div>
      <p className="name">Your Story</p>
    </div>
    <div className="story">
      <div className="profile-photo">
        <img src={Prof8} alt="" />
      </div>
      <p className="name">Nawaz Sharif</p>
    </div>
    <div className="story">
      <div className="profile-photo">
        <img src={Prof9} alt="" />
      </div>
      <p className="name">Justin Bieber</p>
    </div>
    <div className="story">
      <div className="profile-photo">
        <img src={Prof10} alt="" />
      </div>
      <p className="name">Mark zucker</p>
    </div>
    <div className="story">
      <div className="profile-photo">
        <img src={Prof11} alt="" />
      </div>
      <p className="name">Bill gates</p>
    </div>
    <div className="story">
      <div className="profile-photo">
        <img src={Prof12} alt="" />
      </div>
      <p className="name">Maryam Chor</p>
    </div>
  </div>

  {/* ===================================== CREATE ===================================== */}

  <form className="create-post">
    <div className="profile-photo">
      <img src={Prof1} alt=""/>
    </div>
    <input  type="text" placeholder="What's on your mind" alt=""/>
    <input type="submit" value="Post" className="btn btn-primary" />
  
  </form>


{/* ======================================= FEEDS ========================================= */}

<div className="feeds">
  {/* =====================================  FEED ========================================= */}
  <div className="feed">
    <div className="head">
    <div className="user">
      <div className="profile-photo">
        <img src={Prof12} alt="" />
      </div>
      
      <div className="ingo">
      <h3>Mariyum k papa </h3>
      <small>Dubai , 15 mins ago</small>

      </div>
    </div>
    <span className="edit">
    <SlOptions />
    </span>
    </div>

    <div className="photo">
      <img src={Feed1}  alt=""/>
    </div>

    <div className="action-button">
      <div className="interaction-buttons">
        <span className="interaction-icon">< FaRegHeart/></span>
        <span className="interaction-icon">< FaRegComment/></span>
        <span className="interaction-icon">< CiShare2/></span>

      </div>
      <div className="bookmark">
        <span><FaRegBookmark/></span>
      </div>
    </div>
    <div className="liked-by">
      <span><img src={Prof4} alt="" /></span>
      <span><img src={Prof10} alt=""/></span>
      <span><img src={Prof6} alt="" /></span>
      <p>Liked by <b>Robert Forst</b>and <b>323 others</b></p>
    </div>
    <div className="captions">
      <p><b>Lara Dose</b>Lorem iosum asn djis skdeu kdh <span className="harsh-tag">#lifestyle</span></p>
    </div>
    
    <div className="comments text-muted">View all 277 comments</div>
  </div>
  <div className="feed">
    <div className="head">
    <div className="user">
      <div className="profile-photo">
        <img src={Prof14} alt="" />
      </div>
      
      <div className="ingo">
      <h3>Sheikh Rasheed</h3>
      <small>Dubai , 15 mins ago</small>

      </div>
    </div>
    <span className="edit">
    <SlOptions />
    </span>
    </div>

    <div className="photo">
      <img src={Feed2}  alt=""/>
    </div>

    <div className="action-button">
      <div className="interaction-buttons">
        <span className="interaction-icon">< FaRegHeart/></span>
        <span className="interaction-icon">< FaRegComment/></span>
        <span className="interaction-icon">< CiShare2/></span>

      </div>
      <div className="bookmark">
        <span><FaRegBookmark/></span>
      </div>
    </div>
    <div className="liked-by">
      <span><img src={Prof1} alt="" /></span>
      <span><img src={Prof5} alt=""/></span>
      <span><img src={Prof2} alt="" /></span>
      <p>Liked by <b>Robert Forst</b>and <b>323 others</b></p>
    </div>
    <div className="captions">
      <p><b>Lara Dose</b>Lorem iosum asn djis skdeu kdh <span className="harsh-tag">#lifestyle</span></p>
    </div>
    
    <div className="comments text-muted">View all 277 comments</div>
  </div>
  <div className="feed">
    <div className="head">
    <div className="user">
      <div className="profile-photo">
        <img src={Prof8} alt="" />
      </div>
      
      <div className="ingo">
      <h3>Jannat k papa</h3>
      <small>Dubai , 15 mins ago</small>

      </div>
    </div>
    <span className="edit">
    <SlOptions />
    </span>
    </div>

    <div className="photo">
      <img src={Feed3}  alt=""/>
    </div>

    <div className="action-button">
      <div className="interaction-buttons">
        <span className="interaction-icon">< FaRegHeart/></span>
        <span className="interaction-icon">< FaRegComment/></span>
        <span className="interaction-icon">< CiShare2/></span>

      </div>
      <div className="bookmark">
        <span><FaRegBookmark/></span>
      </div>
    </div>
    <div className="liked-by">
      <span><img src={Prof4} alt="" /></span>
      <span><img src={Prof10} alt=""/></span>
      <span><img src={Prof6} alt="" /></span>
      <p>Liked by <b>Robert Forst</b>and <b>323 others</b></p>
    </div>
    <div className="captions">
      <p><b>Lara Dose</b>Lorem iosum asn djis skdeu kdh <span className="harsh-tag">#lifestyle</span></p>
    </div>
    
    <div className="comments text-muted">View all 277 comments</div>
  </div>
  <div className="feed">
    <div className="head">
    <div className="user">
      <div className="profile-photo">
        <img src={Prof9} alt="" />
      </div>
      
      <div className="ingo">
      <h3>Imran Khan</h3>
      <small>Dubai , 15 mins ago</small>

      </div>
    </div>
    <span className="edit">
    <SlOptions />
    </span>
    </div>

    <div className="photo">
      <img src={Feed4}  alt=""/>
    </div>

    <div className="action-button">
      <div className="interaction-buttons">
        <span className="interaction-icon">< FaRegHeart/></span>
        <span className="interaction-icon">< FaRegComment/></span>
        <span className="interaction-icon">< CiShare2/></span>

      </div>
      <div className="bookmark">
        <span><FaRegBookmark/></span>
      </div>
    </div>
    <div className="liked-by">
      <span><img src={Prof4} alt="" /></span>
      <span><img src={Prof10} alt=""/></span>
      <span><img src={Prof6} alt="" /></span>
      <p>Liked by <b>Robert Forst</b>and <b>323 others</b></p>
    </div>
    <div className="captions">
      <p><b>Lara Dose</b>Lorem iosum asn djis skdeu kdh <span className="harsh-tag">#lifestyle</span></p>
    </div>
    
    <div className="comments text-muted">View all 277 comments</div>
  </div>
  <div className="feed">
    <div className="head">
    <div className="user">
      <div className="profile-photo">
        <img src={Prof2} alt="" />
      </div>
      
      <div className="ingo">
      <h3>Shumaila</h3>
      <small>Dubai , 15 mins ago</small>

      </div>
    </div>
    <span className="edit">
    <SlOptions />
    </span>
    </div>

    <div className="photo">
      <img src={Feed5}  alt=""/>
    </div>

    <div className="action-button">
      <div className="interaction-buttons">
        <span className="interaction-icon">< FaRegHeart/></span>
        <span className="interaction-icon">< FaRegComment/></span>
        <span className="interaction-icon">< CiShare2/></span>

      </div>
      <div className="bookmark">
        <span><FaRegBookmark/></span>
      </div>
    </div>
    <div className="liked-by">
      <span><img src={Prof4} alt="" /></span>
      <span><img src={Prof10} alt=""/></span>
      <span><img src={Prof6} alt="" /></span>
      <p>Liked by <b>Robert Forst</b>and <b>323 others</b></p>
    </div>
    <div className="captions">
      <p><b>Lara Dose</b>Lorem iosum asn djis skdeu kdh <span className="harsh-tag">#lifestyle</span></p>
    </div>
    
    <div className="comments text-muted">View all 277 comments</div>
  </div>
  <div className="feed">
    <div className="head">
    <div className="user">
      <div className="profile-photo">
        <img src={Prof3} alt="" />
      </div>
      
      <div className="ingo">
      <h3>Bilawal Gay </h3>
      <small>Dubai , 15 mins ago</small>

      </div>
    </div>
    <span className="edit">
    <SlOptions />
    </span>
    </div>

    <div className="photo">
      <img src={Feed7}  alt=""/>
    </div>

    <div className="action-button">
      <div className="interaction-buttons">
        <span className="interaction-icon">< FaRegHeart/></span>
        <span className="interaction-icon">< FaRegComment/></span>
        <span className="interaction-icon">< CiShare2/></span>

      </div>
      <div className="bookmark">
        <span><FaRegBookmark/></span>
      </div>
    </div>
    <div className="liked-by">
      <span><img src={Prof4} alt="" /></span>
      <span><img src={Prof10} alt=""/></span>
      <span><img src={Prof6} alt="" /></span>
      <p>Liked by <b>Robert Forst</b>and <b>323 others</b></p>
    </div>
    <div className="captions">
      <p><b>Lara Dose</b>Lorem iosum asn djis skdeu kdh <span className="harsh-tag">#lifestyle</span></p>
    </div>
    
    <div className="comments text-muted">View all 277 comments</div>
  </div>
  <div className="feed">
    <div className="head">
    <div className="user">
      <div className="profile-photo">
        <img src={Prof12} alt="" />
      </div>
      
      <div className="ingo">
      <h3>Lana Rose</h3>
      <small>Dubai , 15 mins ago</small>

      </div>
    </div>
    <span className="edit">
    <SlOptions />
    </span>
    </div>

    <div className="photo">
      <img src={Feed1}  alt=""/>
    </div>

    <div className="action-button">
      <div className="interaction-buttons">
        <span className="interaction-icon">< FaRegHeart/></span>
        <span className="interaction-icon">< FaRegComment/></span>
        <span className="interaction-icon">< CiShare2/></span>

      </div>
      <div className="bookmark">
        <span><FaRegBookmark/></span>
      </div>
    </div>
    <div className="liked-by">
      <span><img src={Prof4} alt="" /></span>
      <span><img src={Prof10} alt=""/></span>
      <span><img src={Prof6} alt="" /></span>
      <p>Liked by <b>Robert Forst</b>and <b>323 others</b></p>
    </div>
    <div className="captions">
      <p><b>Lara Dose</b>Lorem iosum asn djis skdeu kdh <span className="harsh-tag">#lifestyle</span></p>
    </div>
    
    <div className="comments text-muted">View all 277 comments</div>
  </div>
</div>


      </div>

      {/* =========================Right =======================*/}

      <div className="right">
        <div className="messages">
          <div className="heading">
            <h4>Messages</h4><FiEdit />
            </div>

           {/*-------------------- Search bar -------------------- */}

           <div className="search-bar">
            <span><IoSearchOutline /></span>
            <input type="search" placeholder="Search Messages" id="message-search" />
           </div>
            {/*-------------------- Messages Category-------------------- */}

            <div className="category">
              <h6 className="active">Primary</h6>
              <h6>General</h6>
              <h6 className="message-requests">Requests(7)</h6>
            </div>

             {/*-------------------- Message-------------------- */}
             <div className="message">
              <div className="profile-photo">
                <img src={Prof14} alt="" />
              </div>
              <div className="message-body">
                <h5>Queen Elizibet</h5>
                <p className="text-bold">2 new messages</p>
              </div>
             </div>
             {/*-------------------- Message-------------------- */}
             <div className="message">
              <div className="profile-photo">
                <img src={Prof10} alt="" />
              </div>
              <div className="message-body">
                <h5>Nawaz Sharif</h5>
                <p className="text-muted">Sorry sir ayaz</p>
              </div>
             </div>
             {/*-------------------- Message-------------------- */}
             <div className="message">
              <div className="profile-photo">
                <img src={Prof9} alt="" />
                <div className="active"></div>
              </div>
              <div className="message-body">
                <h5>Billi Elish</h5>
                <p className="text-muted">Just woke up </p>
              </div>
             </div>
             {/*-------------------- Message-------------------- */}
             <div className="message">
              <div className="profile-photo">
                <img src={Prof6} alt="" />
              </div>
              <div className="message-body">
                <h5>Edum quit</h5>
                <p className="text-muted">coming home</p>
              </div>
             </div>
             {/*-------------------- Message-------------------- */}
             <div className="message">
              <div className="profile-photo">
                <img src={Prof3} alt="" />
                <div className="active"></div>
              </div>
              <div className="message-body">
                <h5>Imran Khan</h5>
                <p className="text-bold">9+ messages</p>
                
              </div>
             </div>
             {/*-------------------- Message-------------------- */}
             <div className="message">
              <div className="profile-photo">
                <img src={Prof2} alt="" />
              </div>
              <div className="message-body">
                <h5>Saad rizvi</h5>
                <p className="text-muted">Tlp Zindabad</p>
              </div>
             </div>

          </div>
         {/*-------------------- End of Messagea -------------------- */}

           {/*-------------------- Friend Requests -------------------- */}
         <div className="friend-requests">
          <h4>Requests</h4>
          <div className="request">
            <div className="info">
              <div className="profile-photo">
                <img src={Prof11} alt=""/>
              </div>
              <div>
                <h5>Hajia Bintu</h5>
                <p className="text-muted">8 mutual friends</p>
              </div>
             
            </div>
            <div className="action">
                <button className="btn btn-primary">Accept</button>
                <button className="btn ">Decline</button>
              </div>
          </div>
          <div className="request">
            <div className="info">
              <div className="profile-photo">
                <img src={Prof12} alt=""/>
              </div>
              <div>
                <h5>Khaaby Lames</h5>
                <p className="text-muted">1 mutual friend</p>
              </div>
             
            </div>
            <div className="action">
                <button className="btn btn-primary">Accept</button>
                <button className="btn ">Decline</button>
              </div>
          </div>
          <div className="request">
            <div className="info">
              <div className="profile-photo">
                <img src={Prof9} alt=""/>
              </div>
              <div>
                <h5>Bill Gates</h5>
                <p className="text-muted">7 mutual friends</p>
              </div>
             
            </div>
            <div className="action">
                <button className="btn btn-primary">Accept</button>
                <button className="btn ">Decline</button>
              </div>
          </div>
          <div className="request">
            <div className="info">
              <div className="profile-photo">
                <img src={Prof1} alt=""/>
              </div>
              <div>
                <h5>Bilawal Bhutto</h5>
                <p className="text-muted">2 mutual friends</p>
              </div>
             
            </div>
            <div className="action">
                <button className="btn btn-primary">Accept</button>
                <button className="btn ">Decline</button>
              </div>
          </div>
         </div>


         </div>
    </div>
    </div>
    
  );

  
};

export default Hero;
