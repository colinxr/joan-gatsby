import PropTypes from 'prop-types'
import React from 'react'
import PrismicDOM from 'prismic-dom'
import { RichText } from 'prismic-reactjs';

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
      <article 
        id={this.props.article}
        className={`${this.props.article ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
        >
        <h2>{this.props.title}</h2>

          {/* this.props.article === 'contact' && (
            <form method="post" action="#">
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
              </div>
              <ul className="actions">
                <li>
                  <input type="submit" value="Send Message" className="special" />
                </li>
                <li>
                  <input type="reset" value="Reset" />
                </li>
              </ul>
            </form>
          ) */}
        
        {
          this.props.body && 
            RichText.render(this.props.body)
        }

        {
          this.props.article === 'contact' && (
            <ul className="icons">
              <li>
                  <a href="https://www.facebook.com/YogaWithJoanMortimer/" target="_blank" className="icon fa-facebook">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                  <a href="https://www.instagram.com/YogaWithJoanMortimer/" target="_blank" className="icon fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
            </ul>
          )
        }

        { close }
      </article>
        {/* <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <p>
           I made a big career change in 2000 becoming a personal trainer with GoodLife Fitness, leaving in 2006 to open Karma Personal Training Studio which I run from my home. Certified Life Coach, NLP Coach, Pilates mat and reformer, Resista Ball Level 2 certification, Twist Conditioning Bosu Master Trainer, Twist Sports Movement, Gravity Personal Training, Group Training and Pilates.
           </p>
          <p>After practicing yoga off and on for more than forty years I finally took the leap to become a certified teacher. My focus is yoga for healthy aging including, Hatha, Yin yoga, Restorative yoga and Meditation.</p>

          <p>Certified RYT 200 hour through Internal Peace Initiative with Alina Calinescu and Richard Wilkinson, whose lineage goes through Judith Hanson Lasiter, BKS Iyengar and Richard Miller (I Rest Nidra).</p>

          <ul>
            <li>
Yin Yoga (25 hour) with Internal Peace Initiative, lineage Bernie Clarke.
            </li>
            <li>Yin Yoga (50 hours) with MotherShip Yoga</li>
            <li>
              Restorative Yoga with Internal Peace Initiative</li>
            <li> Thai Yoga Bliss Certification</li>
            <li>Thai Yoga Massage Certification</li>
            <li>Meditation Certification with Internal Peace Initiative</li>
            <li>Yoga for Traumatic Brian Injuries with Love Your Brian Foundation</li>
            <li>Yoga Alliance EYT over 500 teaching hours</li>
          </ul>
          {close}
        </article>

        <article
          id="classes"
          className={`${this.props.article === 'classes' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Classes</h2>
          {/* <span className="image main">
            <img src={pic02} alt="" />
          </span> 
          <h3>Gentle Hatha Yoga</h3>
          <p>Lorem ipsom dolor sit</p>

          <h3>Yin Yoga</h3>
          <p>Lorem ipsom dolor sit</p>
          
          <h3>Restorative Yoga</h3>
          <p>Lorem ipsom dolor sit</p>

          <h3>Meditation</h3>
          <p>Lorem ipsom dolor sit</p>
          {close}
        </article>

        <article
          id="schedule"
          className={`${this.props.article === 'schedule' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Schedule</h2>
          {/* <span className="image main">
            <img src={pic03} alt="" />
          </span>

          <h3>My Studio</h3>

          <p>
          Classes cost $10 each. Space is limited, please <a href="mailto:">contact me</a> to book your spot. 
          </p>

          <ul>
            <li><strong>Mondays, 10am:</strong> Gentle Hatha Yoga </li>
            <li><strong>Mondays, 5pm:</strong> Gentle Hatha Yoga </li>
            <li><strong>Tuesdays, 7pm:</strong> Yin Yoga </li>
            <li><strong>Saturdays, 11am:</strong> Gentle Hatha Yoga</li>
          </ul>

          <h3>City of London Classes</h3>
          <p>Contact me for details.</p>
          <ul>
            <li><strong>Mondays, 1:30pm:</strong> Meditation, Byron Community Centre</li>
            <li><strong>Wednesdays, 2pm:</strong> Over 55, Medway Community Centre</li>
            <li><strong>Thursdays, 10am:</strong> Over 55, South London Community Centre</li>
            <li><strong>Thursdays, 11:15am:</strong> Meditation, South London Community Centre</li>
            <li><strong>Thursdays, 5:30pm:</strong> Meditation, Springbank Community Centre</li>
          </ul>
          {close}
        </article>

        <article
          id="events"
          className={`${this.props.article === 'events' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">{this.props.title}</h2>
          {/* <span className="image main">
            <img src={pic03} alt="" />
          </span> 
          {this.props.body}
          {close}
        </article>

        <article 
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          
          {close}
        </article>
        * /} */}
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
