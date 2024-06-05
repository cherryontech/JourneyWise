import React from 'react'
import classNames from 'classnames'
import './footer-custom.css'

const Footer = () => {
  
  const style = (listStyle) => {
    return classNames (
      {"w-[35px] h-[35px] rounded-full bg-[#F5FF82] flex": listStyle},
    )
  }

  return (
      <footer className="footer-custom">
          <p id="copyright">© CherryOnTech Venus Voyagers | All Rights Reserved.</p>
          <section id="footerlinks">
            <a href="https://www.linkedin.com/company/cherry-on-tech/posts/?feedView=all">
              <li className ={style("listStyle")}><img src="/LinkedIn-Icon-PH.svg" alt="LinkedIn Logo, link to Cherry on Tech's LinkedIn" /></li>
            </a>
            <a href="https://cherryon.tech/">
              <li className ={style("listStyle")}><img src="Cherry-Icon-PH.svg" alt="Cherry Logo, link to Cherry on Tech's Website" /></li>
            </a>
            <a href="https://www.youtube.com/@cherryontech">
              <li className ={style("listStyle")}><img src="Youtube-Icon-PH.svg" alt="Youtube Logo, link to Cherry on Tech's Youtube Channel" /></li>
            </a>
          </section>
      </footer>
  )
}

export default Footer 