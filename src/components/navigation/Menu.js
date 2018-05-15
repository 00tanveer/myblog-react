import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {Link} from 'react-router-dom';

class Menu extends React.Component {

    constructor(){
        super();
        this.state = {
            width: window.innerWidth
        }
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions() {
        let update_width = window.innerWidth;
        this.setState({ width: update_width});
    }

    componentDidMount(){
        //console.log(window.innerWidth);
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render(){
        //console.log(window.innerWidth);

        const theme = {
            main: 'white'
        };

        const StyledLol = styled.div`
            > .navigation {
                > .checkbox {
                    display: none;
                }

                > .button {
                    //background-color: yellow;
                    background-color: ${props => props.theme.main};
                    height: 5.8rem;
                    width: 5.8rem;
                    position: fixed;
                    top: 3rem;
                    right: 3rem;
                    border-radius: 50%;
                    z-index: 2000;
                    box-shadow: 0 1rem 3rem rgba(${props => props.theme.main}, .1);
                    text-align: center;
                    cursor: pointer;
                    
                    > span {
                        //margin-right: .5rem;
                        display: inline-block;
                    }

                    > .icon {
                        position: relative;
                        margin-top: 2.8rem;
                        
                        &,
                        &:before,
                        &:after {
                            width: 3rem;
                            height: 1px;
                            background-color: #333;
                            display: inline-block;
                        }

                        &:before,
                        &:after {
                            content: "";
                            position: absolute;
                            left: 0;
                            transition: all .2s;
                        }

                        &:before { top: -.8rem; }
                        &:after { top: .8rem; }
                    }
                    
                }

                > .background {
                    height: 5.6rem;
                    width: 5.6rem;
                    border-radius: 50%;
                    position: fixed;
                    top: 3rem;
                    right: 3rem;
                    background-image: linear-gradient(to bottom left, black 75%, ${props => props.theme.main} 25%);
                    z-index: 1000;
                    transition: transform .8s cubic-bezier(.86, 0, .07, 1);
                }

                > .navi {
                    height: 100vh;
                    position: fixed;
                    top: 0;
                    right: 0;
                    z-index: 1500;

                    opacity: 0;
                    width: 0;
                    transition: all .8s;
                    transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                
                    > .list_ {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        list-style: none;
                        text-align: center;
                        width: 100%;
                    
                        > .item {
                            margin: 1rem;

                            > .link_ {
                                &,
                                &:visited {
                                    display: inline-block;
                                    font-size: 3.3rem;
                                    font-family: "Lato", sans-serif;
                                    font-weight: 100;
                                    padding: 1rem 2rem;
                                    width: 33rem;
                                    color: white;
                                    text-shadow: 0 0 3px white;
                                    text-decoration: none;
                                    text-transform: uppercase;
                                    background-image: linear-gradient(110deg, transparent 0%, transparent 50%, ${props => props.theme.main} 50%);
                                    clip-path: polygon(10% 0%, 100% 0, 90% 100%, 0% 100%);
                                    background-size: 240%;
                                    transition: all .4s;
                                }
                                &:hover,
                                &:active {
                                    background-position: 100%;
                                    color: black;
                                    transform: translateX(1rem);
                                    font-weight: 300;
                                }

                                > span {
                                    margin-right: 1.5rem;
                                    display: inline-block;
                                }
                            }
                        }
                    }
                }

                > .checkbox:checked ~ .background {
                    //transform: scale(53);
                    transform: scale(calc(${this.state.width}/24));
                    //zoom: 5;
                }
                /* > .checkbox:checked ~ .button {
                    width: 4rem;
                    height: 4rem;
                } */
                > .checkbox:checked ~ .navi {
                    opacity: 1;
                    width: 100%;
                }
                > .button:hover > .icon:before {
                    //top: -1rem;
                    top: calc(-2rem + 1rem);
                }

                > .button:hover > .icon::after {
                    top: 1rem;
                }

                > .checkbox:checked + .button > .icon {
                    background-color: transparent;
                }
                > .checkbox:checked + .button > .icon:before {
                    top: 0;
                    transform: rotate(135deg);
                }
                > .checkbox:checked + .button > .icon:after {
                    top: 0;
                    transform: rotate(-135deg);
                }
            }
            
        `
        //background-image: linear-gradient(110deg, transparent 0%, transparent 60%, yellow 40%);
        return (
            
            <ThemeProvider theme={theme}>
                <StyledLol>
                    <div className="navigation">
                        <input type="checkbox" className="checkbox" id="navi-toggle" />
                        <label htmlFor="navi-toggle" className="button">
                            <span className="icon">&nbsp;</span>
                        </label>

                        <div className="background">&nbsp;</div>
                        <nav className="navi">
                            <ul className="list_">
                                <li className="item"><Link to="/code" className="link_">Code</Link></li>
                                <li className="item"><Link to="/photography" className="link_">Photography</Link></li>
                                <li className="item"><Link to="/bookreviews" className="link_">Book Reviews</Link></li>
                                <li className="item"><Link to="/life" className="link_">Life</Link></li>
                                <li className="item"><Link to="/contact" className="link_">Contact</Link></li>
                            </ul>
                        </nav>
                    </div> 
                </StyledLol>
            </ThemeProvider>
            
        );
    }
}

export default Menu;