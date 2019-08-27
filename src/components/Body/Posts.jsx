import React, { Component } from 'react';
import postData  from "../../../server/Data/postData";
import {Link} from "react-router-dom";
class Posts extends Component {
  state = {
    post: postData,

  };
  render() {
    // console.log(this.state);
    const { post } = this.state;

    let response = post.map((post, index) => {
      return (

        <div key={post.id}>


          <div class="card">
            <h2>{post.post.title}</h2>
            <hr />
            <h5>{post.author.username},{post.createdAt}</h5>

            <div class="fakeimg" >
              <img src={post.post.img} style={{ "height": "250px", width: "100%" }} alt="" />
            </div>
            <p >{post.catagory}</p>
            <p className="com">Comments: {post.post.comments.length}</p>
            <p>{post.post.desc}</p>
            <Link to={`/post/${post.id}`}><button className="btn">Read More</button></Link>
          </div>
          </div>


         

            




      );

    });

    return (
      <div className="post">
         <div class="row">
            <div class="leftcolumn">
              {response}

            </div>
          
        <div class="rightcolumn">
          <div class="card">
            <h2>About Me</h2>
            <div class="fakeimg" >
              <img src="/img/img.png" style={{ "height": "150px", width: "100%" }} alt="" />
            </div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          </div>
          <div class="card popular">
            <h3>Popular Post</h3>
            <div class="fakeimg">
              <img src="/img/1.jpg" style={{ "height": "150px", width: "100%" }} alt="" />
            </div><br />
            <div class="fakeimg">
              <img src="/img/2.jpg" style={{ "height": "150px", width: "100%" }} alt="" />
            </div><br />
            <div class="fakeimg">
              <img src="/img/3.jpg" style={{ "height": "150px", width: "100%" }} alt="" />
            </div>
          </div>
          <div class="card">
            <h3>Follow Me</h3>
            <p>Some text..</p>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Posts;





{/* <div class="card">
              <h2>The Scottish Highlands</h2>
              <h5>Aurther:Razi, Sep 2, 2017</h5>
              <div class="fakeimg" >
              <img  src="/img/33.jpg" style={{"height":"250px" ,width:"100%"}} alt=""/>
              </div>
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
          </div> */}




//           import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { postData } from "../Data/postData";
// class Posts extends Component {
//   state = {
//     post: postData,
//     id: "sdsd"
//   };
//   render() {
//     console.log(this.state);
//     const { post } = this.state;
//     let response = post.map((post, index) => {
//       return (
//         <div key={post.id}>
//           <img src={`${post.post.img}`} alt=" post image" />
//           <Link to={`/post/${post.id}`}>
//             <h1>{post.post.title}</h1>
//           </Link>
//           <h3>{post.post.desc}</h3>
//           <p>{post.author.img}</p>
//           <p>{post.author.username}</p>
//           <p>{post.createdAt}</p>
//           <p> Likes {post.post.likes}</p>
//           <p>COmmentes {post.post.comments.length}</p>
//           <p>share</p>
//         </div>
//       );
//     });
//     return <div>{response}</div>;
//   }
// }
// export default Posts;


