import React from 'react';


const Title = (props) => {
    console.log("Title Props",props);
    
    return (
        <div>
            <div class="header">
            
            <img className="img-responsive img-center" src="/img/img.png" alt="" />
            </div>
            <h1>{props.data.catagory}</h1>
        </div>
    );
}

export default Title;
