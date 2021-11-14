import React from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/dist/client/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { useEffect } from 'react'

const login = () => {

    const router = useRouter();

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                router.push('/')
            }
        })
    }, [])

    return (
        <Wrapper>
            <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" />
            <Title>Log in to access your account</Title>
            <LoginImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
            <SignInButton onClick={() => signInWithPopup(auth, provider)}>
                Sign in with Google
            </SignInButton>
        </Wrapper>
    )
}

export default login

const Wrapper = tw.div `
    flex flex-col bg-gray-200 h-screen p-4 py-8
`
const SignInButton = tw.div `
    bg-black text-white text-center p-4 my-10 cursor-pointer
`
const UberLogo = tw.img `
    h-6 w-auto object-contain self-start mb-4
`
const Title = tw.div `
    text-5xl pt-4 text-gray-500
`
const LoginImage = tw.img `
    object-contain w-full
`
