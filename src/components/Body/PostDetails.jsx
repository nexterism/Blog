import React from 'react';
import { Link } from "react-router-dom";
import  postData  from "../../../server/Data/postData";

const PostDetails = props => {
  let post = postData.filter((post, index) => {
    return post.id == props.match.params.id;
  });
  // console.log(post);

  return (
    <div>
      {post.map((post,index)=>{
        return(
          <div key={post.id} >
              <div className="Blog">
      <div className="parallex">
        <img src={`${post.postDetails.img}`} className="img-responsive" alt="" />
        <h1>{post.catagory}</h1>
      </div>
      <div className="row">
        <div className="lc">
          <div className="card">
            <h1>{post.post.title}</h1>
            <h5>{post.author.username},{post.createdAt}</h5>
            <div className="fakeimg">
              <img src={post.post.img} style={{ "height": "250px", width: "100%" }} alt="" />
            </div>
            <p>{post.catagory}</p>
            <p className="com">Comments: {post.post.comments.length} </p>
            <p>{post.postDetails.para1}
<br />
              <span className="stag" style={{ textAlign: "center", "fontWeight": "bold", "marginLeft": "400px" }}>{post.postDetails.span1}</span>
              <br />
              {post.postDetails.para2}

              <img src={post.postDetails.img2} style={{ "height": "350px", width: "100%" }} alt="" />
              {post.postDetails.para3}


</p>
          </div>
          <div class="container">
	
	<div class="card">
	    <div class="card-body">
	        <div class="row">
        	    <div class="col-md-2">
        	        <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid"/>
        	        <p class="text-secondary text-center">15 Minutes Ago</p>
        	    </div>
        	    <div class="col-md-10">
        	        <p>
        	            <a class="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Maniruzzaman Akash</strong></a>
        	            <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                        <span class="float-right"><i class="text-warning fa fa-star"></i></span>
        	            <span class="float-right"><i class="text-warning fa fa-star"></i></span>
        	            <span class="float-right"><i class="text-warning fa fa-star"></i></span>

        	       </p>
        	       <div class="clearfix"></div>
        	        <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        	        <p>
        	            <a class="float-right btn btn-outline-primary ml-2"> <i class="fa fa-reply"></i> Reply</a>
        	            <a class="float-right btn text-white btn-danger"> <i class="fa fa-heart"></i> Like</a>
        	       </p>
        	    </div>
	        </div>
	        	<div class="card card-inner">
            	    <div class="card-body">
            	        <div class="row">
                    	    <div class="col-md-2">
                    	        <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid"/>
                    	        <p class="text-secondary text-center">15 Minutes Ago</p>
                    	    </div>
                    	    <div class="col-md-10">
                    	        <p><a href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Maniruzzaman Akash</strong></a></p>
                    	        <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    	        <p>
                    	            <a class="float-right btn btn-outline-primary ml-2">  <i class="fa fa-reply"></i> Reply</a>
                    	            <a class="float-right btn text-white btn-danger"> <i class="fa fa-heart"></i> Like</a>
                    	       </p>
                    	    </div>
            	        </div>
            	    </div>
	            </div>
	    </div>
	</div>
</div>




        </div>
        <div class="rc">
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
          </div>
        )

      })}
    </div>
  );
}

export default PostDetails;






// import React from "react";
// import { postData } from "../Data/postData";
// import { Link } from "react-router-dom";
// const PostDetails = props => {
//   let post = postData.filter((post, index) => {
//     return post.id == props.match.params.id;
//   });
//   console.log(post);
//   return (
//     <div>
//       {post.map((post, index) => {
//         return (
//           <div key={post.id}>
//             <img src={`${post.post.img}`} alt=" post image" />

//             <h1>{post.post.title}</h1>

//             <h3>{post.post.desc}</h3>
//             <p>{post.post.details}</p>
//             <p>{post.author.img}</p>
//             <p>{post.author.username}</p>
//             <p>{post.createdAt}</p>
//             <p> Likes {post.post.likes}</p>
//             <p> Total COmmentes {post.post.comments.length}</p>
//             {post.post.comments.map((comment, index) => {
//               return (
//                 <div key={index}>
//                   <h3>{comment.comment}</h3>
//                   <p>{comment.author.img}</p>
//                   <p>{comment.author.username}</p>
//                 </div>
//               );
//             })}
//             <p>share</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default PostDetails;
