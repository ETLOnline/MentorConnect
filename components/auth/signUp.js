import Input from '../input'

export default function SignUp({onChange, setUiState, signUp}) {
    return (
        <div>
            <p className='text-3xl font-black'>Sign for an account</p>
            <div className='mt-10'>
                <label className='text-sm'>Email</label>
                <Input name='email' onChange={onChange} />
            </div>
            <div className='mt-4'>
                <label>Password</label>
                <Input name='password' onChange={onChange} type='password' />
            </div>
            <button onClick={signUp}>Sign Up</button>
            <p><br/></p>
            <p className='mt-12 text-sm font-light'>
                Have an account ?
                <span 
                    onClick={() => setUiState('signIn')}
                    role='button'
                    className='cursor-pointer text-pink-600'>
                        Sign In.
                </span>                    
            </p>
        </div>        
    )
}