import Input from '../input'

export default function ForgotPasswordSubmit({onChange, forgotPasswordSubmit}) {
    return (
        <div>
            <p className='text-3xl font-black'>Confirm new password. </p>
            <div className='mt-10'>
                <label className='text-sm'>Authentication Code</label>
                <Input name='authCode' onChange={onChange} />
            </div>
            <div className='mt-10'>
                <label className='text-sm'>New password</label>
                <Input name='password' onChange={onChange} type='password' />
            </div>
            <button onClick={forgotPasswordSubmit}>Submit new Password</button>              
        </div>        
    )
}