import React from 'react';
import video from '../data/video';


function Details() {

    function increaseNumber () {
        return (
            console.log("i") 
        );
    }
    function decreaseNumber () {
        return (
            console.log("d")
        );
    }
    function hideComments () {
        return (
            console.log("hide")
        );
    }

  return (
  <div>
      <h1>{video.title}</h1>
      <p>{video.views} | {video.createdAt}</p>
      <button onClick={increaseNumber}>{video.upvotes} 👍</button>
      <button onClick={decreaseNumber}>{video.downvotes} 👎</button> <br/><br/>
      <button onClick={hideComments}>Hide Comments</button> <hr/>
      <h1>Comments</h1>
  </div>
  
  );
}

export default Details;
