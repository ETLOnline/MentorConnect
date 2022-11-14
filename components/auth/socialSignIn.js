import { Auth } from 'aws-amplify'
import { FaGoogle } from 'react-icons/fa'

export default function SocialSignIn() {
    return (
        <div>
            
            <button onClick={() => Auth.federatedSignIn({ provider: "Google"})}>
                <div>
                    <FaGoogle size='28' className='text-red-600' />
                    <p>Sign in with Google </p>
                </div>                 
            </button>            
        </div>        
    )
}