import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        {/* <div className="logo">
            <span className="icon fa-diamond"></span>
        </div> */}
        <div className="content">
            <div className="inner">
                <h1>Yoga with Joan Mortimer</h1>
                <p>Gentle Hatha yoga, Yin yoga, Restorative Yoga, Meditation. Workshops, Sound Healing and Retreats.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('classes')}}>Classes</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('schedule')}}>Schedule</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('events') }}>Events</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
