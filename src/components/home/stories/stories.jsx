import React, { useRef, useState } from 'react'
import styles from "./stories.module.css"
import { ArrowRight, Plus } from '../../../svg'
import Story from './components/story'

const Stories = () => {

    const stories = [
        {
            profile_picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yd1wjsuO7XokVEqthLWPG1BPUJ1F8I58KQ&usqp=CAU",
            profile_name: "Elon Musk",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSRiVMbyaQJuvy-4q5Ly7tZuMUTM9ITGy7w&usqp=CAU"
        },
        {
            profile_picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yd1wjsuO7XokVEqthLWPG1BPUJ1F8I58KQ&usqp=CAU",
            profile_name: "Elon Musk",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSRiVMbyaQJuvy-4q5Ly7tZuMUTM9ITGy7w&usqp=CAU"
        },
        {
            profile_picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yd1wjsuO7XokVEqthLWPG1BPUJ1F8I58KQ&usqp=CAU",
            profile_name: "Elon Musk",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSRiVMbyaQJuvy-4q5Ly7tZuMUTM9ITGy7w&usqp=CAU"
        },
        {
            profile_picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yd1wjsuO7XokVEqthLWPG1BPUJ1F8I58KQ&usqp=CAU",
            profile_name: "Elon Musk",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSRiVMbyaQJuvy-4q5Ly7tZuMUTM9ITGy7w&usqp=CAU"
        },
        {
            profile_picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yd1wjsuO7XokVEqthLWPG1BPUJ1F8I58KQ&usqp=CAU",
            profile_name: "Elon Musk",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSRiVMbyaQJuvy-4q5Ly7tZuMUTM9ITGy7w&usqp=CAU"
        },
        {
            profile_picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yd1wjsuO7XokVEqthLWPG1BPUJ1F8I58KQ&usqp=CAU",
            profile_name: "Elon Musk",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSRiVMbyaQJuvy-4q5Ly7tZuMUTM9ITGy7w&usqp=CAU"
        },
        {
            profile_picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yd1wjsuO7XokVEqthLWPG1BPUJ1F8I58KQ&usqp=CAU",
            profile_name: "Elon Musk",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSRiVMbyaQJuvy-4q5Ly7tZuMUTM9ITGy7w&usqp=CAU"
        },
        {
            profile_picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yd1wjsuO7XokVEqthLWPG1BPUJ1F8I58KQ&usqp=CAU",
            profile_name: "Elon Musk",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSRiVMbyaQJuvy-4q5Ly7tZuMUTM9ITGy7w&usqp=CAU"
        },
    ]

    // const storiesRef = useRef([])
    const storiesRef = useRef(stories.map(() => React.createRef()));

    const [lastStory, setLastStory] = useState(4)
    const [startStory,setStartStory] = useState(0)

    const scrollToStory = (index,prev) => {
        try {
            if(prev) {
                setStartStory(index)
                setLastStory(lastStory - 1)
            }else{
                setStartStory(startStory + 1)
                setLastStory(index)
            }
            storiesRef.current[index].current.scrollIntoView({ behavior: 'smooth' });
        } catch (error) {
            console.log("[SCROLL_STORY]", error)
        }
    };


    return (
        <div className={styles.stories} >
            {/* <div onClick={() => scrollToStory(lastStory - 1, true)} className={`${styles.white_circle} ${styles.prev_button} rotate180`} >
                <ArrowRight color={"#656746b"} />
            </div> */}

            <div className={styles.stories_wrap} >
                <div className={styles.create_story_card} >
                    <img src="../../../images/default_pic.png" alt="" className={styles.create_story_img} />
                    <div className={styles.plus_story} >
                        <Plus color={"#fff"} />
                    </div>
                    <div className={styles.story_create_text} >Create Story</div>
                </div>
                {
                    stories.map((story, index) => (
                        <Story ref={storiesRef.current[index]} key={`story${index}`} story={story} />
                    ))
                }
            </div>

            {/* <div onClick={() => scrollToStory(lastStory + 1)} className={`${styles.white_circle} ${styles.next_button}`} >
                <ArrowRight color={"#656746b"} />
            </div> */}
        </div>
    )
}

export default Stories