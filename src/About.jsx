import React, { useRef, useEffect } from 'react'
import './styles/About.css'
import './App.css';
import profilePic from "./assets/MrBanks.png"
import youtube from "./assets/youtube.png"
import instagram from "./assets/instagram.png"
import tiktok from "./assets/tiktok.png"
import article1 from "./assets/article1.jpg"
import article2 from "./assets/article2.jpg"
import article3 from "./assets/article3.jpg"
import comment1 from "./assets/comm1.jpeg"
import comment2 from "./assets/comm2.jpg"
import comment3 from "./assets/comm3.jpg"

function About() {

  const aboutBody = useRef();

  useEffect(() => {
    document.getElementById('root').style.backgroundColor = '#1C1C1C';
    window.scrollTo({
      top: 0
    });

    aboutBody.current.style.opacity = 1;
    aboutBody.current.style.bottom = 0;
  }, [])

  


  return (
    <>
     <div id='about-me-body' ref={aboutBody}>
    <div id='about-me-section'>
      <div id='about-me-text'>

        <p className='hola-about'>¡Hola, ¿cómo estás? Mi nombre es Dejor Banks y ¡quiero ser tu instructor de español! He estado estudiando español durante los últimos 9 años y he alcanzado un alto nivel de fluidez. ¡Vamos a llevar tu español al siguiente nivel!
        </p>
        <h1 className='montserrat-800'>About Me.</h1>
        <h3 className='montserrat-800'>I'm a young man with a <a className='montserrat-800'>passion</a> for language and cultural immersion.</h3>
        <p className='montserrat-400'>
        This has led me to obtain fluency in Spanish over the past 9 years. Throughout the process, I have been able to meet a ton of amazing people, travel to some beautiful places, develop cultural competency, social awareness, social skills, and much more. My objective is to help Spanish and English speakers achieve their language goals.
        </p>
        <div id='about-me-buttons' className='montserrat-800'>
          <a className='montserrat-800' href="mailto: dejour.banks02@gmail.com">Get In Contact</a>
        </div>
      </div>
      <div id='about-me-picture'>
        <img src={profilePic}></img>
      </div>
    </div>

    <div id='about-me-platforms'>
      <h5 className='my-plats-text montserrat-800'>Everyday Tips For Everyday People</h5>
      <p className='my-plats-desc montserrat-400'>I use the power of social media to help future Spanish Speakers</p>
      <div id='platform-containers-parent'>
      <div className='platform-container'>
        <div className='platform-images'>
          <img src={instagram}></img>
        </div> 
        <div className='platform-text'>
        <h4 className='montserrat-800'>Instagram</h4>
        <h5 className='montserrat-800'>Quick Tips!</h5>
        <p>
          Everyday tips for Spanish speaking and social skills.
        </p>
         <button className='montserrat-800' onClick={() => window.open('https://www.instagram.com/lo.tienes?igsh=MXFyNG90OG54dTh3bg==')}>GO</button>
        </div>
      </div>

      <div className='platform-container'>
        <div className='platform-images'>
          <img src={youtube}></img>
        </div>
        <div className='platform-text'>
        <h4 className='montserrat-800'>Youtube</h4>
        <h5 className='montserrat-800'>Long Form Advice!</h5>
        <p>
          Subscribe for deep dives into topics surrounding Spanish and socializing.
        </p>
         <button className='montserrat-800' onClick={() => window.open('https://youtube.com/@lotienes?si=utctbBLE_rrS3eXn')}>GO</button>
        </div>
      </div>

      <div className='platform-container'>
        <div className='platform-images'>
          <img src={tiktok}></img>
        </div> 
        <div className='platform-text'>
        <h4 className='montserrat-800'>TikTok</h4>
        <h5 className='montserrat-800'>Quick Tips!</h5>
        <p>
          Everyday tips for Spanish speaking and social skills.
        </p>
         <button className='montserrat-800' onClick={() => window.open("https://www.tiktok.com/@tul0tienes?_t=8o1s1xGBMsw&_r=1")}>GO</button>
        </div>
      </div>

      </div>
    </div>
    <section id='m-s-section'>
    <div id='mission-statement'>

      <h2 className='montserrat-800'>Articles</h2>
      
      <div id='article-list'>

        <p id='im-dejour-banks'>He sido destacado en varios artículos escritos en la Universidad de Elon, la institución donde estoy obteniendo mi título universitario. También he enseñado una pequeña clase de español aquí y he presentado mi contenido en línea en aulas más grandes.</p>

        <img src={article1} onClick={() => window.open("https://www.elonnewsnetwork.com/article/2023/11/el-centro-brings-back-conversation-class-program-elon-university")}></img>
        <img src={article2} onClick={() => window.open("https://www.elonnewsnetwork.com/article/2023/04/bilingual-elon-university-student-youtube-teach-spanish")}></img>
        <img src={article3} onClick={() => window.open("https://www.elon.edu/u/news/2021/12/01/around-the-world-around-a-table-polyglot-lunch-a-living-language-lab/")}></img>

      </div>

      <div id='comments'>

      <h2 className='montserrat-800'>Don't Just Take It From Me!</h2>

      <div id='comment-section'>
        
      
        <img src={comment2}></img>
        <div>
        <img src={comment1}></img>
        <img src={comment3}></img>
        </div>

      </div>

      </div>

      <div id='call-to-action-div'>
      <p className='montserrat-400'>So, Ready To Break The Language Barrier?</p>
      <button id='call-to-action' className='montserrat-800' onClick={() => window.open('https://calendly.com/dejour-banks02/spanish-consultation?fbclid=PAZXh0bgNhZW0CMTEAAaYsjHtY0UTjxzjJO5W4KojqejKul8hHWwYWGkuPTjKYgYJea26ysLPiPsI_aem_nf-7ErjjTY21JCssKZIRtA')}>Schedule A Call</button>
      </div>
    </div>
    </section>
    </div>
  
    
    </>
  )
}

export default About