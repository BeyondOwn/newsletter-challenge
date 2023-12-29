import React, { useState } from 'react';
import './Home.css'
import { Link, useNavigate, Routes, Route } from 'react-router-dom';
import Succes from './Succes';



export default function Home()
{
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
        var isValidEmail = re.test(email);
        console.log(isValidEmail);
        if (isValidEmail){
          navigate('/succes', { state: { email: email } });
        }
        else
        return;
      };
      

return(
    <>
<div className='container'>
      <div className='window'>
      <object className='mobile' data='/newsletter-challenge/assets/images/illustration-sign-up-mobile.svg' ></object>
        <div className='left-side'>
        <h1 id='title'>Stay updated!</h1>
        <h5 className='description'>Join 60,000+ product managers receiving monthly updates on:</h5>
        <ul>
        
          <div className='icon-li'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
          <li>Product discovery and builduing what matters</li>
          </div>
          
          <div className='icon-li'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
          <li>Measuring to ensure updates are a succes</li>
          </div>

          <div className='icon-li'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
          <li>And much more</li>
          </div>
          
        </ul>
        <h6 id='email'>Email address</h6>
        <form name="subscribeForm" onSubmit={handleSubmit}>
          <input placeholder='email@company.com' name='email' type='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
          <button >Subscribe to monthly newsletter</button>
        </form>
        </div>
        <div className='right-side'>
        <object className='desktop' data='/newsletter-challenge/assets/images/illustration-sign-up-desktop.svg'></object>
        </div>
      </div>
     </div>
     <Routes>
     
     <Route path="/succes" element={<Succes/>} exact />
     
     </Routes>
     </>
)
}