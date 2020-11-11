import PropTypes from 'prop-types'
import React from 'react'
// import PrismicDOM from 'prismic-dom'
import { RichText } from 'prismic-reactjs';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

class Main extends React.Component {
    renderGallery() {
        // const { gallery } = this.props.gallery 
        
        console.log(this.props.gallery)

        let galleryContent = this.props.gallery[0].items.map((galleryImage, index) => {
            const { image } = galleryImage
            // return <img src={image.url} alt={image.alt} key={index}/>;
            return <div data-src={image.url} />
            
        });

        return (
            <div className="image-gallery">
                <AwesomeSlider>
                    {galleryContent}
                </AwesomeSlider>
            </div>
        )
    }

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
                        } ${this.props.gallery ? 'gallery' : ''}`}
                    >
                    <h2>{this.props.title}</h2>

                    {
                        this.props.article === 'gallery' && this.props.gallery && (
                            this.renderGallery()
                        )
                    }
                    
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
