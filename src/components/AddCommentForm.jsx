import React, { useState } from 'react';

function AddCommentForm({ onAddComment }) {{/*This is a component function. It receives onAddComment as a prop -
     which is a function that will be passed from App.jsx to handle adding the comment to the list. */}


{/*commentName = the current value (what the user typed in the name field)
setCommentName = the function to update that value
useState('') = starts with an empty string 
Every time the user types, we call setCommentName with the new value.*/}
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState(''); {/*Same thing but for the comment text field. */}


  {/*This function runs when the user clicks the "Add comment" button. */}
  const handleSubmit = () => {
    if (commentName.trim() === '' || commentText.trim() === '') return; 
 {/*trim() removes extra spaces
If either field is empty (just spaces), the function stops (return)
This prevents adding blank comments */}


{/*onAddComment is the function we received as a prop from App.jsx
We're calling it and passing the user's data as an object
This sends the data up to the parent component (App.jsx) */}    
    onAddComment({
      name: commentName,
      text: commentText
    });
    
    setCommentName('');
    setCommentText('');
  };


  {/*This is the JSX - what actually shows on the screen. */}
  return (
    <div className='CommentForm'>
      <input
        type="text"
        placeholder="Your name"
        value={commentName} 
        onChange={(e) => setCommentName(e.target.value)} 
      />
      <input
        type="text"
        placeholder="Your comment"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button onClick={handleSubmit}>Add comment</button>
    </div>
  );
}
{/* value={commentName} This "binds" the input to our state:
            Whatever is in commentName shows in the input
            This makes it a "controlled component" */}
            
 {/*onChange={(e) => setCommentName(e.target.value)}     The onChange event fires.
                                                         e.target.value contains what they just typed.
                                                         We call setCommentName with that value.
                                                         React updates the state and re-renders. 
                                                         Think of e as a package of information about the event
                                                         and you can name it whatever you want 
                                                         target represents the elemnt that has been changed.
                                                         value represents the current value written in the input*/}

export default AddCommentForm;