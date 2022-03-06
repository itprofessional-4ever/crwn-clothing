import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { authentication } from '../../firebase/firebase.utils';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import './sign-in.styless.scss'



class SignIn extends React.Component {
    constructor(props) {
        super(props);
        
    this.state = {
        email: '',
        password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();

        this.setState( { email:'', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value})
    }

    signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
        .then((re) => {
            console.log(re);
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email"
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label="email"
                        required 
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton 
                            onClick={this.signInWithGoogle} signInWithGoogle>
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;