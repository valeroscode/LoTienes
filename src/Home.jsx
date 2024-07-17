import React, { useEffect, useRef, useState } from 'react'
import './styles/Home.css'
import './App.css';
import banks from "./assets/MrBanks.png"
import { Link  } from "react-router-dom";

function Home() {

  window.scrollTo({
    top: 0
  })

  const welcome = useRef();
  const visionSection = useRef();
  const landingPageIMG = useRef();
  const oneMission = useRef();
  const aboutText = useRef();
  const [loaded, setLoaded] = useState();
  const linkedIn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>`
  let newsBtn;
  let careersBtn;
  let partnersBtn;

  useEffect(() => {
    setLoaded(true)
    visionSection.current.classList.add('componentShow')

  

    const opacityObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          entry.target.classList.toggle('fadeIn', entry.isIntersecting)
      })
  })
  opacityObserver.observe(oneMission.current)

const slideLeftObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      entry.target.classList.toggle('slideFadeInLeft', entry.isIntersecting)
  })
})
slideLeftObserver.observe(aboutText.current)

const slideRightObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      entry.target.classList.toggle('slideFadeInRight', entry.isIntersecting)
  })
})

if (document.getElementById('nav-bar').style.display === 'none') {
  document.getElementById('nav-bar').style.display = 'flex'
}

document.getElementById('vision-info-2').click();

  }, [])


  return (
    <>
 
    <section ref={visionSection} id='vision-section'>

    <div id='vision-info'>

      <p className='hola'>¡Hola, ¿cómo estás? Mi nombre es Dejour Banks y ¡quiero ser tu instructor de español! He estado estudiando español durante los últimos 9 años y he alcanzado un alto nivel de fluidez. ¡Vamos a llevar tu español al siguiente nivel!</p>

      <div id='home-intro'>
      <img id='mrbanks' src={banks}></img>
      <div id='home-intro-desc'>
    <h1 className='montserrat-800'>Let's <a ref={oneMission} style={{color: '#B28852'}} className='montserrat-800'>Break</a> The Language Barrier.</h1>
    <div ref={aboutText} id='aboutText'>
    <a ref={welcome} id="welcome">Dejour Banks ∙ Spanish Instructor</a>
    <div id='conv-btns'>
    <button className='booking' onClick={() => window.open('https://calendly.com/dejour-banks02/spanish-consultation?fbclid=PAZXh0bgNhZW0CMTEAAaYsjHtY0UTjxzjJO5W4KojqejKul8hHWwYWGkuPTjKYgYJea26ysLPiPsI_aem_nf-7ErjjTY21JCssKZIRtA')}>Book Now</button>
    <Link to="/About"><button>About Me</button></Link>
    </div>
    <br/> 
      </div>
      </div>
      </div>
    </div>

    <div id='vision-info-2'>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
      <h4 className='montserrat-800'>1 on 1 Lessons</h4>
      <p>Let's Break The Barrier 🤝</p>
      <button onClick={() => window.open('https://calendly.com/dejour-banks02/spanish-consultation?fbclid=PAZXh0bgNhZW0CMTEAAaYsjHtY0UTjxzjJO5W4KojqejKul8hHWwYWGkuPTjKYgYJea26ysLPiPsI_aem_nf-7ErjjTY21JCssKZIRtA')}>Book Now</button>
    </div>  

    <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
      <h4 className='montserrat-800'>Weekly Tips</h4>
      <p>Learn More</p>
      <button onClick={() => window.open('https://www.instagram.com/lo.tienes?igsh=MXFyNG90OG54dTh3bg==')}>See More</button>
    </div> 

    <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
      <h4 className='montserrat-800'>YouTube Content</h4>
      <p>Take Your Spanish To New Heights</p>
      <button onClick={() => window.open('https://youtube.com/@lotienes?si=utctbBLE_rrS3eXn')}>See More</button>
    </div>     

    </div>

    <div id='vision-info-3'>
     <p className='script-1'>Tengo una pasión por los idiomas y cómo pueden ayudarnos a conectar. Mi objetivo es ayudarte a conectar con personas que han sido inaccesibles</p>
     <p className='script-2'>Quiero llevar tus habilidades de hablar español a nuevos niveles. Conmigo, podrás romper la barrera del idioma como nunca antes</p>
     <p className='script-3'>Tengo una pasión por los idiomas y cómo pueden ayudarnos a conectar. Mi objetivo es ayudarte a conectar con personas que han sido inaccesibles</p>
     <p className='script-4'>Con consistencia y dedicación, puedo llevarte al punto en el que te sientas seguro/a hablando con nativos de países de habla hispana. Se trata más que solo de conocer lo básico, se trata de conexión y diversión</p>  
      <div id='vision-info-3-tagline'>
      <h1 className='montserrat-800'>A Curriculum Designed For <a className='montserrat-800'>YOU</a></h1>
      <p className='montserrat-400 i-teach'>I'll teach you how I became fluent in Spanish with lessons tailored to you.</p>
      
      <div id='benefits-list'>
      <div className='benefit'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
      <h4 className='montserrat-800'>We Start From YOUR Proficiency Level</h4>
      </div>

      <div className='benefit'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
      <h4 className='montserrat-800'>Simulate Conversational Situations</h4>
      </div>

      <div className='benefit'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
      <h4 className='montserrat-800'>Level Up Your Understanding</h4>
      </div>

      <div id='first-time'>

        <h2 className='first montserrat-800'>First time working with me?</h2>

      <div id='intake-session'>
        <div>
         <h3 className='montserrat-800'>Start Off With An Intake Session!</h3>
         </div>
         <p>Includes a proficiency assessment</p>
         <h2>$25</h2>
         <button className='montserrat-800' onClick={() => window.open('https://calendly.com/dejour-banks02/spanish-consultation?fbclid=PAZXh0bgNhZW0CMTEAAaYsjHtY0UTjxzjJO5W4KojqejKul8hHWwYWGkuPTjKYgYJea26ysLPiPsI_aem_nf-7ErjjTY21JCssKZIRtA')}>Schedule</button>
      </div>

      </div>

      <h2 className='montserrat-800 ind-sessions'>Individual Sessions</h2>

      <div id='packages'>

        <div className='package'>
        <div className='package-pricing'>
          <h2>Basic</h2>
          <div className='discount'><h3>$40</h3></div>
          <div className='percent'>0% off</div>
          </div>
          <div className='package-details'>
          <p className='package-p montserrat-400'><a>Pay Per Lesson</a></p>
            <p className='package-p montserrat-400'><a>Standard Rate</a></p>
            <p className='package-p montserrat-400'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg><a>Tailored Lessons</a></p>
            <p className='package-p montserrat-400'><a>At Your Pace</a></p>
            <button>Let's Go</button>
          </div>
        </div>

        <div className='package'>
          <div className='package-pricing'>
          <h2>Monthly</h2>
          <div className='discount'><a>$160</a><a>$140</a></div>
          <div className='percent'>12% off</div>
          </div>
          <div className='package-details'>
            <p className='package-p montserrat-400'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg><a>Pay Per Month</a></p>
            <p className='package-p montserrat-400'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg><a>Discounted Rate</a></p>
            <p className='package-p montserrat-400'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg><a>Tailored Lessons</a></p>
            <p className='package-p montserrat-400'><a>Once a week</a></p>
            <button>Let's Go</button>
          </div>
        </div>

        <div className='package'>
        <div className='package-pricing'>
          <h2>Accelorator</h2>
          <div className='discount'><a>$320</a><a>$260</a></div>
          <div className='percent'>19% off</div>
          </div>
          <div className='package-details'>
            <p className='package-p montserrat-400'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg><a>Pay Per Month</a></p>
            <p className='package-p montserrat-400'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg><a>Discounted Rate</a></p>
            <p className='package-p montserrat-400'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg><a>Tailored Lessons</a></p>
            <p className='package-p montserrat-400'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg><a>Twice a week</a></p>
            <button>Let's Go</button>
          </div>
        </div>

      </div>

      <div id='group-pack'>
       <h2>Group Sessions</h2>

       <div className='package-2'>
        <div className='package-pricing'>
          <h2>Group</h2>
          <div className='discount'><h3>$20</h3></div>
          </div>
          <div className='package-details'>
          <p className='package-p montserrat-400'><a>Pay Per Lesson</a></p>
            <p className='package-p montserrat-400'><a>Standard Rate</a></p>
            <p className='package-p montserrat-400'><a>Tailored Lessons</a></p>
            <p className='package-p montserrat-400'><a>At Your Pace</a></p>
            <p className='package-p montserrat-400'><a>Group of 3 - 7</a></p>
            <button onClick={() => window.open("https://calendly.com/dejour-banks02/group-spanish-consultation")}>Let's Go</button>
          </div>
        </div>

      </div>

      </div>

      <div id='call-to-action-div'>
      <p className='montserrat-400'>Want To Learn More About Me?</p>
      <Link to="/About"><button id='call-to-action' className='montserrat-800'>Learn More</button></Link>
      </div>
      
      </div>
     
    </div>
    </section>
 
    </>
  )
}

export default Home
