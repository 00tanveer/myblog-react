import React, {Component} from 'react';
import styled from 'styled-components';

class Menu extends React.Component {

    render(){
        const Lol = () => (
            <div className="white">
                <h1>Hello</h1>
                <div className="yellow">
                    <h2>Tan</h2>
                </div>
            </div>   
        )

        const StyledLol = styled.div`
            > .navigation {
                > .checkbox {
                    display: none;
                }

                > .button {
                    background-color: yellow;
                    height: 5.8rem;
                    width: 5.8rem;
                    position: fixed;
                    top: 3rem;
                    right: 3rem;
                    border-radius: 50%;
                    z-index: 2000;
                    box-shadow: 0 1rem 3rem rgba(black, .1);
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
                            height: 2px;
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
                    background-image: linear-gradient(to bottom left, black 70%, yellow 30%);
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
                                    font-family: "Roboto", sans-serif;
                                    font-weight: 200;
                                    padding: 1rem 2rem;
                                    width: 30rem;
                                    color: white;
                                    text-shadow: 0 0 3px white;
                                    text-decoration: none;
                                    text-transform: uppercase;
                                    background-image: linear-gradient(110deg, transparent 0%, transparent 50%, yellow 50%);
                                    clip-path: polygon(14% 0%, 100% 0, 86% 100%, 0% 100%);
                                    background-size: 240%;
                                    transition: all .4s;
                                }
                                &:hover,
                                &:active {
                                    background-position: 100%;
                                    color: black;
                                    transform: translateX(1rem);
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
                    transform: scale(53);
                }
                > .checkbox:checked ~ .navi {
                    opacity: 1;
                    width: 100%;
                }

                > .button:hover > .icon:before {
                    top: -1rem;
                }

                > .button:hover > .icon::after {
                    top: 1rem;
                }

                > .checkbox:checked + > .button > .icon {
                    background-color: transparent;
                }
                > .checkbox:checked + > .button > .icon:before {
                    top: 0;
                    transform: rotate(135deg);
                }
                > .checkbox:checked + > .button > .icon:after {
                    top: 0;
                    transform: rotate(-135deg);
                }
            }
            
        `
        //background-image: linear-gradient(110deg, transparent 0%, transparent 60%, yellow 40%);
        return (
            <StyledLol>
                <div className="navigation">
                    <input type="checkbox" className="checkbox" id="navi-toggle"/>
                        <label for="navi-toggle" className="button">
                            <span className="icon">&nbsp;</span>
                        </label>

                        <div className="background">&nbsp;</div>
                        <nav className="navi">
                            <ul className="list_">
                                <li className="item"><a href="#" className="link_">Code</a></li>
                                <li className="item"><a href="#" className="link_">Photography</a></li>
                                <li className="item"><a href="#" className="link_">Book Reviews</a></li>
                                <li className="item"><a href="#" className="link_">Life</a></li>
                                <li className="item"><a href="#" className="link_">Contact</a></li>
                            </ul>
                        </nav>
                </div> 
            </StyledLol>
        );
    }
}

export default Menu;