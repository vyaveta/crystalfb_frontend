import { useEffect } from "react"

export const stopEventPropagation = event => {
    event.stopPropagation()
}

export const useClickOutside = (ref,fun) => {
    useEffect(() => {
        const listener = (e) => {
            console.log("[CLICK_OUTSIDE-REF]",ref.current.contains(e.target))
            if(!ref.current || ref.current.contains(e.target)) return
            fun()
        }
        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)
        return () => {
            document.removeEventListener('mousedown', listener)
            document.removeEventListener('touchstart'.listener)
        }
    },[ref])
}