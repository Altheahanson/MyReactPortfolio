import React, {useState} from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers';
import { validateEmail } from '../../utils/helpers';
import Box from '@mui/material/Box';


function Contact() {
  const [pages] = useState([
      {
          name: "contact"
      }
  ]);

  const [currentPage] = useState(pages[0]);

  const [formState, setFormState] = useState({
      name: '',
      email: '',
      message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
          console.log('Submit Form', formState);
      }
  };

  const handleChange = (e) => {
      if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          if (!isValid) {
              setErrorMessage('Your email is invalid.');
          } else {
              setErrorMessage('');
          }
      } else {
          if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
          } else {
              setErrorMessage('');
          }
      }
      if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
          console.log('Handle Form', formState);
      }
  };


  return (
    <Box component="main" sx={{  flexGrow: 1, pl: 25, pr:10, py: 12,  }}>
      <section className="bg-dark">
          <div className="container">
              <div className="row">
                  <div className="col-lg-10 mx-auto text-white mb-4">
                  <h1 className="text-center">{capitalizeFirstLetter(currentPage.name)}</h1>
                      <hr className="light my-4" />
                      <form id="contact-form" onSubmit={handleSubmit} className="mb-5">
                          <div>
                              <label htmlFor="name">Name:</label>
                              <input
                                  className="form-control"
                                  placeholder="Name"
                                  type="text"
                                  name="name"
                                  defaultValue={name}
                                  onBlur={handleChange}
                              />
                          </div>
                          <div>
                              <label htmlFor="email">Email address:</label>
                              <input
                                  className="form-control"
                                  placeholder="Email"
                                  type="email"
                                  name="email"
                                  defaultValue={email}
                                  onBlur={handleChange}
                              />
                          </div>
                          <div>
                              <label htmlFor="message">Message:</label>
                              <textarea
                                  className="form-control"
                                  placeholder="Message"
                                  name="message"
                                  rows="5"
                                  defaultValue={message}
                                  onBlur={handleChange}
                              />
                          </div>
                          {errorMessage && (
                              <div>
                                  <p className="error-text">{errorMessage}</p>
                              </div>
                          )}
                          <div className="text-center">
                          <button type="submit" className="btn btn-primary btn-xl js-scroll-trigger">Submit</button>
                          </div>
                      </form>
                  
                      <h4>
                          Althea Hanson <br />
                          Or simply send me an email at:  <a href="mailto:altheacarlenehanson@gmail.com"> altheacarlenehanson@gmail.com</a>
                      </h4>
                  </div>
              </div>
          </div>
      </section>
      </Box>
  );
}

export default Contact