import React, { useState, useEffect } from 'react'
import Comments from './Comments';

const CommentList = [
  { title: "comment1", content: "message1", likes: 1},
  { title: "comment2", content: "message2", likes: 2},
  { title: "comment3", content: "message3", likes: 3},
];

export default function Memo() {
  const [comment, setComments] = useState(CommentList);

  useEffect(() => {
    const interval = setInterval(() => {
      setComments((prevComments) => [
        ...prevComments,
        { 
          title: `comment${prevComments.length+1}`, content: `comment${prevComments.length+1}` , likes: 1
        },
      ])
    }, 1000)
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <>
      <Comments commentList={comment}/>
    </>
  )
}
