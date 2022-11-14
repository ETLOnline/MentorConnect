import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import '../configureAmplify'
import { useRouter } from 'next/router'

export default function Protected () {
    const [user, setUser] = useState(null)
    const router = useRouter()

    useEffect (() => {
        checkUser()        
    }, [])

    async function checkUser() {
        try{
            const user = await Auth.currentAuthenticatedUser()
            setUser(user)
        } catch(err) {
            setUser(null);
            router.push('/profile')
        }            
    }

    if(!user) return null
    return (
        <div>
            <p>Protected route for signed in users</p>        
        </div>
    )
}