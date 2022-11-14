import { Auth } from 'aws-amplify'
import SocialSignIn from './socialSignIn'
import Input from '../input'

export default function SignIn({onChange, setUiState, signIn}) {
    return (
        <div>
            <p className='text-3xl font-black'>Sign in to your account</p>
            <div className='mt-10'>
                <label className='text-sm'>Email</label>
                <Input name='email' onChange={onChange} />
            </div>
            <div className='mt-4'>
                <label>Password</label>
                <Input name='password' onChange={onChange} type='password' />
            </div>
            <button onClick={signIn}>Sign In</button>
            <span
                onClick={() => {setUiState('forgotPassword')}}
                className='ml-8 sm:ml-24 text-pink-600 cursor-pointer'
            >Forgot your password?</span>
            <p><br/></p>
            <SocialSignIn />
            <p className='mt-12 text-sm font-light'>
                Don't have an account ?
                <span 
                    onClick={() => setUiState('signUp')}
                    role='button'
                    className='cursor-pointer text-pink-600'>
                        Sign Up.
                </span>                    
            </p>
        </div>        
    )
}