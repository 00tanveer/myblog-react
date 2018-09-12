import React from 'react';
import ImageSlide from './ImageSlide';
import Arrow from './Arrow';

import styled from 'styled-components';

const Card = styled.div`
    .container {
        width: 30rem;
        height: 40rem;
        border-radius: 1rem;
        box-shadow: 0 2.5rem 8rem rgba(90,90,90, .3);
        .image {
            height: 42%;
            overflow: hidden;
            img {
                max-width: 155%;
                //max-height: 100%;
            }
        }
        .meta {
            height: 8.75%;
            background-color: #111;
        }
        .snippet {
            padding: 1.8rem 2.5rem 2.5rem 2.5rem ;
            font-size: 1.4rem;
            text-align: left;
            line-height: 2.7rem;
        }
    }
`
class Gallery extends React.Component {
    constructor (props) {
        super(props);
    
        this.state = {
            currentImageIndex: 0
        };
    }

    render() {
        return (
            <Card>
                <div className='container'>
                    <div className='image'>
                        <img src={'https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900'}/>
                    </div>
                    <div className='meta'></div>
                    <div className='snippet'>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        </p>
                    </div>
                </div>
            </Card>
        );
    }
}

export default Gallery;