import Link from 'next/link'

export default function NavBar () {
    return (
        <div>
            <nav className="py-4 px-12">
                <Link href='/'>Home</Link>
                <Link href='/profile' className="ml-4">Profile</Link>
                <Link href='/protected' className="ml-4">Protected</Link>
            </nav>
        </div>
    )
}