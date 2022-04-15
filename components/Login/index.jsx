import { Card, List, ListInput, ListButton, Icon, Button, Link } from "konsta/react"
import NextLink from 'next/link'
import { LogoGoogle, ChatBubble2 } from 'framework7-icons/react'
import { signIn } from 'next-auth/react'
export default function LoginForm() {
    return (
        <>
            <div className="h-screen overflow-hidden w-full flex justify-center items-center gap-2">
                <div className="w-full lg:flex flex-col pl-28 gap-2 hidden">
                    <h1
                        data-aos="fade-up"
                        data-aos-duration="500"
                        className="text-6xl font-extrabold text-primary">KaChat</h1>
                    <p
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="font-normal">Meet friends around the world</p>
                </div>
                <div className="trasition-all flex md:justify-center lg:justify-end fixed w-full lg:right-[100px] xl:right-[150px] z-20 p-3">
                    <Card
                        data-aos="fade-up"
                        margin="m-0"
                        className="!rounded-xl w-full md:w-[380px]">
                        <div className="grid place-items-center">
                            <Icon>
                                <ChatBubble2 className="text-primary h-40 w-40" />
                            </Icon>
                            <p className="font-normal lg:hidden text-center">Meet friends around the world</p>
                        </div>
                        <List
                            className="mb-1"
                            hairlines={false}>
                            <ListInput
                                floatingLabel
                                label='Username or Email'
                                placeholder="Username or Email"
                            />
                            <ListInput
                                className="mt-5"
                                floatingLabel
                                label='Password'
                                placeholder="Password"
                                type="password"
                            />
                            <div className="flex justify-end px-3 mt-2">
                                <NextLink
                                    href='/auth/reset-password'>
                                    <a
                                        className="text-red-500 text-sm underline">
                                        Forgot Password?</a>
                                </NextLink>
                            </div>
                            <ListButton
                                className="mt-5 mx-3 border dark:border-primary-dark/50 border-primary/50 rounded-md">
                                Login</ListButton>
                        </List>
                        <div className="mx-3">
                            <p className='text-center p-2 dark:text-gray-400 text-gray-500'>or</p>
                            <Button
                                onClick={() => signIn('google', { callbackUrl: '/' })}
                                className="flex gap-3">
                                <LogoGoogle className='w-5 h-5' />
                                <span className="w-full text-center">Continue with Google</span>
                            </Button>
                            <p className="text-center mt-3 text-gray-900 dark:text-gray-300 text-sm">
                                {"Don't have an account?"}
                                <NextLink href='/auth/signup'>
                                    <a className="text-primary underline"> Sign Up</a>
                                </NextLink>
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
            <div
                className="animate__animated animate__fadeIn custom-shape-divider-bottom-1647246727">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="fill-primary dark:fill-primary-dark"></path>
                </svg>
            </div>
        </>
    )
}