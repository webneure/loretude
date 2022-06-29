import React from 'react';
// import { } from 'react-router-dom';
// import './App.css';



function Home() {
  return (
    <>
          <div className="App">
              {/* background image layout */}
              <img src='./assets/layout.png' style={{ zIndex: '-1', position: 'fixed' }} />
              <div className='row'>
                  {/* left contents */}
                  <div className='col-sm-6 col-md-6 col-lg-6'>
                      <div className='mt-5 mb-5' style={{ paddingTop: '25%', margin: '0 20px' }}>
                          <h6 style={{ fontSize: '30px', fontWeight: 'bold' }}>LORETUDE</h6><br />
                          <h4 style={{
                              fontSize: '30px'
                          }}>Learn Everything You Want To Learn
                          </h4>
                          <p style={{ width: '70%' }}>Learn to code with our beginner-friendly tutorials and examples. Read tutorials and examples, write programs, run code and learn to code.</p>
                          <form className='mt-5'>
                              <input
                                  type="text"
                                  placeholder='enter your email'
                                  style={{
                                      padding: '10px',
                                      borderRadius: '10px 0 0 10px',
                                      border: '1px solid #fff',
                                      width: '60%',
                                      background: 'transparent',
                                      color: '#fff',
                                      outline: 'none'
                                  }}
                              />
                              <button
                                  style={{
                                      padding: '10px',
                                      borderRadius: ' 0 10px 10px 0',
                                      border: '1px solid #f1f1f1',
                                      outline: 'none'
                                  }}><a href="/course">Get Started</a></button>
                          </form>
                      </div>
                  </div>
                  {/* right image */}
                  <div className='col-sm-6 col-md-6 col-lg-6'>
                      <div className='mt-5 mb-5'>
                          <img src='./assets/learn.gif' width="500" />
                      </div>
                  </div>
              </div>
          </div>
    </>
  );
}

export default Home;
