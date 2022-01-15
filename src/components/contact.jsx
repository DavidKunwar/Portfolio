import React, { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
// import LinearProgress from '@material-ui/core/LinearProgress';
import axios from 'axios';

function Contact(){

  const [isClicked, setIsClicked] = useState(false);
  const [submitted, setSubmitted] = useState(true);
  const [displayProgress, setDisplayProgress] = useState(false);
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: ''
  });

  function inputChange(event){
    const {name, value} = event.target;
    

    setInput( (prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  function handleSubmission(event){
    event.preventDefault();
    setDisplayProgress(true);

    axios.post('http://localhost:9000/',
    {
      name: input.name,
      email: input.email,
      message: input.message
    }).then((response) => {

      setDisplayProgress(false);
      //CHECKING IF THE MAIL WAS SUCCESSFULL & RENDERING RESOPNSE ACCORDINGLY
      setSubmitted(response.data.mailSuccessfull);
      setIsClicked(true);
      // SETTING INPUT FIELDS TO NULL
      setInput({
        name: '',
        email: '',
        message: ''
      });
    }).catch(function(err) {
        console.log('Axios Error :-S', err);
      });
  }


    return (
        <form class="contact" id="contact">
          {/* action="http://localhost:9000/" method="POST"> */}
        <div class="contact-section">
          <h1>Contact Me</h1>
        <p className="contact-text">Currently available for Freelance oppurtunities. If you have a project you want to collaborate/discuss or just wish to say "Hello". Let's get in touch.</p>
        
        <div class="input-box">
          <input onChange={inputChange} type="text" required="required" name="name" value={input.name} />
          <span>Full Name</span>
        </div>
        
        <div class="input-box">
          <input onChange={inputChange} type="email" required="required" name="email" value={input.email} />
          <span>Email</span>
        </div>
       
        <div class="input-box">
          {/* <input type="text" required="required" name="message" /> */}
          <textarea onChange={inputChange} required="required" rows="3" name="message" value={input.message}></textarea>
          <span>Type Your Message..</span>
        </div>

        <div class="input-box">
          <button onClick={handleSubmission} class="btn btn-success" type="submit">Send Message</button>
        </div>

        {
          displayProgress && <CircularProgress />
        }

        {
          isClicked && (
            <p id="thank-you" class="thank-you">
              {
                submitted ? "Thank You for taking the time. I'll get in touch soon." : "Your message was not sent. Please try again."
              }
            </p>
          )
        }
        
        
        </div>
      </form>
    );
}


export default Contact;