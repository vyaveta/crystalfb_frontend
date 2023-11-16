import EmojiPicker from 'emoji-picker-react'
import React, { useCallback, useRef, useState } from 'react'
import { handleApiError } from '../../../api/common/commonFunctions'

const EmojiWrapper = ({ style, setText, text, user }) => {

    const textRef = useRef(null)
    const [showPicker, setShowPicker] = useState(false)

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
        <>
            <div className={style.create_post__flex_center} >
                <textarea
                    ref={textRef}
                    maxLength={500}
                    value={text}
                    placeholder={`Whats on you mind, ${user.first_name.toLowerCase() === "surya" || user.first_name.toLowerCase() === "suryagayathri" ? "sweetheart" : user.first_name}`}
                    className={style.create_post__post_input}
                    onChange={e => setText(e.target.value)}
                >
                </textarea>
            </div>
            <div className={style.create_post__emoji_wrap} >
                {
                    showPicker &&
                    <div className={`${style.comment_emoji_picker} ${style.rlmove}`} >
                        <EmojiPicker onEmojiClick={handleEmoji} />
                    </div>
                }
                <img src="../../../icons/colorful.png" alt="" />
                <i className="emoji_icon_large" onClick={(e) => setShowPicker(prev => !prev)} ></i>
            </div>
        </>
    )
}

export default EmojiWrapper