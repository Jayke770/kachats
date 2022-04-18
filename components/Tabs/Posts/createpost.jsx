import { useState, useEffect } from 'react'
import { Card, Button, Chip, Badge, Block, Popover } from "konsta/react"
import { Xmark, Smiley } from 'framework7-icons/react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import Theme from '../../../lib/Theme/setTheme'
import Mode from '../../../lib/Theme/setDarkmode'
import ContentEditable from 'react-contenteditable'
import sanitizeHtml from "sanitize-html"
export default function CreatePost() {
    const { theme, updatetheme } = Theme()
    const { thememode, updatethememode } = Mode()
    const [emojipicker, setemojipicker] = useState({ target: undefined, opened: false, theme: undefined })
    const [post, setpost] = useState({
        body: "",
        placeholder: true
    })
    useEffect(() => {
        setemojipicker({
            ...emojipicker,
            theme: thememode === 'dark' ? 'dark' : 'light'
        })
    }, [])
    const postBody = (e) => {
        setpost({ ...post, body: sanitizeHtml(e.target.value) })
    }
    return (
        <>
            <div
                className="createpost animate__animated ms-500 fixed z-40 w-full h-full left-0 top-0 bg-black bg-opacity-50 duration-400 hidden justify-center items-center p-3 transition-all"
                onClick={(e) => {
                    //hide create post
                    if (e.target.classList.contains('createpost') && e.target.classList.contains('flex')) {
                        e.target.classList.add("animate__fadeOut")
                        setTimeout(() => {
                            e.target.classList.remove("flex", "animate__fadeOut")
                            e.target.classList.add("hidden")
                        }, 500)
                    }
                }}>
                <Card
                    margin="m-0"
                    className='w-full sm:w-[600px] !rounded-lg'
                    header={
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-normal">Create Post</span>
                            <Button
                                clear
                                rounded
                                className="!w-auto"
                                colors={{
                                    text: 'text-red-500',
                                    border: 'border-red-500',
                                    bg: 'bg-red-500',
                                    activeBg: 'active:bg-red-500',
                                    activeBgDark: 'active:bg-red-600',
                                    touchRipple: 'touch-ripple-red-500'
                                }}
                                onClick={(e) => {
                                    //hide create post
                                    if (document.querySelector('.createpost').classList.contains('flex')) {
                                        document.querySelector('.createpost').classList.add("animate__fadeOut")
                                        setTimeout(() => {
                                            document.querySelector('.createpost').classList.remove("flex", "animate__fadeOut")
                                            document.querySelector('.createpost').classList.add("hidden")
                                        }, 500)
                                    }
                                }}>
                                <Xmark className="w-6 h-6" />
                            </Button>
                        </div>
                    }
                    footer={
                        <div>
                            <Button
                                rounded>
                                Post
                            </Button>
                        </div>
                    }>
                    <div className="relative">
                        {/* Show placeholder when post body is empty */}
                        {post.body === "" && <span className='animate__animated animate__fadeInUp ms-300 absolute text-xl dark:text-zinc-400 text-zinc-500 p-2'>Hey!, What's on your mind?</span>}
                        <ContentEditable
                            className="post-body p-2 overflow-auto min-h-[50vh] max-h-[80vh] text-xl text-gray-800 dark:text-gray-300 rounded-md outline-none transition-all"
                            onChange={postBody}
                            html={post.body} />
                        <div className="absolute right-0 bottom-0">
                            <Button
                                clear
                                rounded
                                colors={{
                                    text: 'text-gray-500',
                                    border: 'border-gray-500',
                                    bg: 'bg-red-500',
                                    activeBg: 'active:bg-gray-500',
                                    activeBgDark: 'active:bg-gray-600',
                                    touchRipple: 'touch-ripple-gray-500'
                                }}
                                className="!w-auto emoji"
                                onClick={() => setemojipicker({ ...emojipicker, target: '.emoji', opened: true })}>
                                <Smiley className="w-7 h-7 " />
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Emoji picker */}
            <Popover
                opened={emojipicker.opened}
                target={emojipicker.target}
                size="w-auto"
                onBackdropClick={() => setemojipicker({ ...emojipicker, target: undefined, opened: false })}>
                <Picker
                    title='Pick your emoji…'
                    emoji='point_up'
                    set="facebook"
                    theme={emojipicker.theme}
                    onSelect={(e) => {
                        setpost({ ...post, body: `${post.body}${e.native}` })
                        setemojipicker({ ...emojipicker, target: undefined, opened: false })
                    }} />
            </Popover>

        </>
    )
}