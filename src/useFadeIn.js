//element를 천천히 나타나게 만드는것

import { useEffect, useRef } from 'react'

//css로도 가능하지만 hooks와 animation을 섞어보는 연습
const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef()
  useEffect(() => {
    if (typeof duration !== 'number' || typeof delay !== 'number') {
      return
    }
    if (element.current) {
      const { current } = element
      current.style.transition = `opacity ${duration}s easy-in-out ${delay}s`
      current.style.opacity = 1
    }
  }, [])
  //prop처럼 보이게
  return { ref: element, style: { opacity: 0 } }
}

const App = () => {
  const fadeInH1 = useFadeIn(1, 2)
  const fadeInP = useFadeIn(5, 10)
  return (
    <div>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>My name is Jiwon</p>
    </div>
  )
}

export default App
