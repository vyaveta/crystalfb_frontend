import React, { useCallback, useRef, useState } from 'react'
import style from "./styles.module.css"

import Picker from "emoji-picker-react"
import { handleApiError } from '../../api/common/commonFunctions'
import AddToYourPost from './components/add-to-your-post'
import Button from '../ui/button'
import ImagePreview from './components/image-preview'
import EmojiWrapper from './components/emoji-wrapper'

const CreatePostPopUp = ({ user }) => {

    const [text, setText] = useState("")
    const [showPreview, setShowPreview] = useState(true)
    const [showPicker, setShowPicker] = useState(false)
    const textRef = useRef(null)

    

    return (
        <div className='blur' >
            <div className={style.create_post__post_box} >
                <div className={style.create_post__box_header} >
                    <div className={`small_circle ${style.small_circle}`} >
                        <i className="exit_icon"></i>
                    </div>
                    <span>Create Post</span>
                </div>
                <div className={`${style.create_post__box_profile}`} >
                    <img className={`${style.profile_image}`} src={user.picture} alt="" />
                    <div className={style.create_post__box_col} >
                        <div className={style.create_post__box_profile_name} >
                            {user?.first_name} {user?.last_name}
                        </div>
                        <div className={style.create_post__box_privacy} >
                            <img src="../../../icons/public.png" alt="" />
                            <span>public</span>
                            <i className="arrowDown_icon"></i>
                        </div>
                    </div>
                </div>
                {!showPreview ?
                    <EmojiWrapper style={style} setText={setText} text={text} user={user} />
                    :
                    <ImagePreview />
                }
                <AddToYourPost />
                <Button text={'Create'} name={"primary"} />
            </div>
        </div>
    )
}

export default CreatePostPopUp