import Input from '../input'

export default function ConfirmSignUp({onChange, setUiState, confirmSignUp}) {
    return (
        <div>
            <p className='text-3xl font-black'>Confirm your account</p>
            <div className='mt-10'>
                <label className='text-sm'>Confirmation Code</label>
                <Input name='authCode' onChange={onChange} />
            </div>
            
            <button onClick={confirmSignUp}>Confirm Sign Up</button>
            <button onClick={() => {setUiState('signIn')}}>Cancel</button>            
        </div>        
    )
}