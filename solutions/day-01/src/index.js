import React from 'react'
import ReactDOM from 'react-dom'
import myImage from './images/frontend_technologies.png'
import secondImage from './images/mayor.jpg'
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)
const techs = ['HTML', 'CSS', 'JavaScript',"Python","React"]
const newFormat= techs.map((tech)=> <hl>{tech}</hl>)
const user=(
  <div className="users">
    <img src={secondImage} alt="Mayor"></img>
    <br/>
    <p>Sodipo Mayowa</p>
    <small>Junior Web developer</small>
    <h3>Skills</h3>
    {newFormat}<br/>
    <small>{date}</small>
  </div>
)


const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const techies = (
  <div className="image"> 
    <img src={myImage} alt='mayor'/>
  </div>
)
const newsLetter=(
  <div className="news">
    <h1>SUSCRIBE</h1>
    <p>Sign up with your email address to receive news and updates</p>
    <input type="input" placeholder="First name"></input>
    <input type="input" placeholder="First name"></input>
    <input type="input" placeholder="First name"></input>
    <br/>
    <button>Subscribe</button>
  </div>
)

const Main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {techies}
      {user}
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

const footer = (
  <footer>
    <div className='footer-wrapper'>
      {newsLetter}
      <p>{copyRight}</p>
    </div>
  </footer>
)

const app = (
  <div className='app'>
    {header}
    {Main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(app, rootElement)