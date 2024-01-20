import EmojiPicker from 'emoji-picker-react'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { handleApiError } from '../../../api/common/commonFunctions'
import { useClickOutside } from '../../../hooks/click-outside'

const EmojiWrapper = ({ style, setText, text, user, type2 }) => {

    const textRef = useRef(null)
    const emojiRef = useRef(null)
    const [showPicker, setShowPicker] = useState(false)

    useClickOutside(emojiRef, () => setShowPicker(false))

    const handleEmoji = useCallback((e) => {
        try {
            setText(prev => prev + e.emoji)
        } catch (error) {
            console.error("[handleEmoji]", error)
            handleApiError(error)
        } finally {
            textRef?.current?.focus()
        }
    }, [text, textRef])


    return (
        <div className={type2 ? style.images_input: ""} >
            <div className={!type2 ? style.create_post__flex_center: ""} >
                <textarea
                    ref={textRef}
                    maxLength={500}
                    value={text}
                    placeholder={`Whats on you mind, ${user.first_name.toLowerCase() === "surya" || user.first_name.toLowerCase() === "suryagayathri" ? "sweetheart" : user.first_name}`}
                    className={`${style.create_post__post_input} ${type2 && style.input2}`}
                    onChange={e => setText(e.target.value)}
                >
                </textarea>
            </div>
            <div className={!type2 ? style.create_post__emoji_wrap: ""} >
                {
                    showPicker &&
                    <div className={`${style.comment_emoji_picker} ${ !type2 ? style.rlmove : style.movepicker2}`} ref={emojiRef} >
                        <EmojiPicker onEmojiClick={handleEmoji} />
                    </div>
                }
                {!type2 && <img src="../../../icons/colorful.png" alt="" /> }
                <i className={`emoji_icon_large ${type2 ? style.moveleft: ""}`} onClick={(e) => setShowPicker(prev => !prev)} ></i>
            </div>
        </div>
    )
}

export default EmojiWrapper