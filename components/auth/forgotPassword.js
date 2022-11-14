import Input from '../input'

export default function ForgotPassword({onChange, setUiState, forgotPassword}) {
    return (
        <div>
            <p className='text-3xl font-black'>Forgot Password ?</p>
            <div className='mt-10'>
                <label className='text-sm'>Email</label>
                <Input name='email' onChange={onChange} />
            </div>
            
            <button onClick={forgotPassword}>Reset Password</button>
            <button onClick={() => {setUiState('signIn')}}>Cancel</button>       
        </div>        
    )
}