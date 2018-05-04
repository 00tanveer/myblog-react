import React from 'react';
import styled from 'styled-components';
import Button from '../../components/ui/Button';

class AdminPage extends React.Component {

    
    render(){
        const StyledForm = styled.div`
            > .formcontainer {
                width: 40%;
                position: absolute;;
                left: 50%;
                transform: translateX(-50%) translateY(50%);
                >form {
                    > .row {
                        display: flex;
                        flex-direction: row;
                        margin: 3rem;
                        > input {
                            flex: 80;
                            height: 4rem;
                            border-style: solid;
                            border-radius: 2px;
                            padding: 1rem;
                        }
                    }
                }
            }
        `;
        return(
            <StyledForm>
                <div className='formcontainer'>
                    <form>
                        <div className='row'>
                            <input id='email' type='email' placeholder='Insert email'/>
                        </div>
                        <div className='row'>
                            <input id='password' type='password' placeholder='Insert password'/>
                        </div>
                        <div className='row'>
                            <Button label='Login' />
                        </div>
                    </form>
                </div>
                
            </StyledForm>
        );
    }
}

export default AdminPage;