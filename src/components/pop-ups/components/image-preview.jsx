import React, { useCallback, useRef } from 'react'
import EmojiWrapper from './emoji-wrapper'

const ImagePreview = ({ style, setText, text, user, images, setImages }) => {

  const imageInputRef = useRef(null)

  const handleImages = useCallback((e) => {
    try{
      const files = e.target.files
    }catch(_){
      console.error("[image-preview_HandleImages]", _?.message)
    }
  }, [])

  return (
    <div className={style.overflow_a} >
      <EmojiWrapper style={style} setText={setText} text={text} user={user} type2 />
      <div className={style.add_pics_wrap} >
        <input type="file" multiple hidden ref={imageInputRef} onChange={handleImages} />
        {
          images && images.length ? "" :

            <div className={`${style.add_pics_inside1}`}>
              <div className={style.small_white_circle}>
                <i className="exit_icon"></i>
              </div>
              <div className={style.add_col} onClick={() => imageInputRef.current.click()} >
                <div className={style.add_circle} > 
                <i className="addPhoto_icon"></i>
                </div>
                <span>Add Photos/videos</span>
                <span>Or drag and drop</span>
              </div>
            </div>
        }
        <div className={style.add_pics_inside2}> 
        <div className={style.add_circle}>
          <i className="phone_icon"></i>
        </div>
        <div className={style.mobile_text}>Add photos from your mobile device.</div>
        <span className={style.addphone_btn}>Add</span>
        </div>
      </div>
    </div>
  )
}

export default ImagePreview