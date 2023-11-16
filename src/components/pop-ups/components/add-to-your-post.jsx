import React from 'react'
import style from "./style.module.css"
import { Dots, Feeling, Photo } from '../../../svg'

const AddToYourPost = () => {
    return (
        <div className={style.add_to_your_post} >
            <div className={style.add_to_text} >
                Add to your post
            </div>
            <div className={`${style.post_header_right} hover1`} >
                <Photo color={"#45bd62"} />
            </div>
            <div className={`${style.post_header_right} hover1`} >
                <i className="tag_icon"> </i>
            </div>
            <div className={`${style.post_header_right} hover1`} >
                <Feeling color={"#f7b928"} />
            </div>
            <div className={`${style.post_header_right} hover1`} >
                <i className="maps_icon"></i>
            </div>
            <div className={`${style.post_header_right} hover1`} >
                <i className="microphone_icon"></i>
            </div>
            <div className={`${style.post_header_right} hover1`} >
                <Dots color={"#65676be"} />
            </div>
        </div>
    )
}

export default AddToYourPost