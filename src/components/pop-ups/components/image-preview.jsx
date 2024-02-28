import React, { useCallback, useRef } from 'react'
import EmojiWrapper from './emoji-wrapper'

const ImagePreview = ({ style, setText, text, user, images, setImages, setShowPreview }) => {

  const imageInputRef = useRef(null)

  const handleImages = useCallback((e) => {
    try {
      const files = Array.from(e.target.files)
      files.forEach((img) => {
        const reader = new FileReader()
        reader.readAsDataURL(img)
        reader.onload = (readerEvent) => {
          setImages((images) => [...images, readerEvent.target.result])
        }
      })
    } catch (_) {
      console.error("[image-preview_HandleImages]", _?.message)
    }
  }, [])

  return (
    <div className={`${style.overflow_a} scrollbar`} >
      <EmojiWrapper style={style} setText={setText} text={text} user={user} type2 />
      <div className={style.add_pics_wrap} >
        <input type="file" multiple hidden ref={imageInputRef} onChange={handleImages} />
        {
          images && images.length ?
            (
              <div className={`${style.add_pics_inside1} ${style.p0}`}>
                <div className={style.preview_actions}>
                  <button className='hover1' >
                    <i className="edit_icon"></i>
                    Edit
                  </button>
                  <button className='hover1' onClick={() => imageInputRef.current.click()} >
                    <i className="addPhoto_icon"></i>
                    Add Photos/videos
                  </button>
                </div>
                <div className={style.small_white_circle} onClick={() => setImages([])} >
                  <i className="exit_icon"></i>
                </div>
                <div className={`${images.length > 5 && images.length % 2 === 0 ? style.preview6 
                  : images.length > 5 ? `${style.preview6} ${style.singular_grid}` 
                  : style[`preview${images.length}`]}`} 
                  >
                  {
                    images.map((img, i) => (
                      <img src={img} key={`create_post_img${i}`} />
                    ))
                  }
                </div>
              </div>
            ) :

            <div className={`${style.add_pics_inside1}`}>
              <div className={style.small_white_circle} onClick={() => setShowPreview(false)} >
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