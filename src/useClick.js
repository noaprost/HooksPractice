//누군가 element를 클릭 했을때 실행되는 함수
import { useEffect, useRef } from 'react'
import './styles.css'

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick !== 'function') return
    if (element.current) {
      element.current.addEventListener('click', onClick)
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener('click', onClick)
      }
    }
  }, [])
  return typeof onClick !== 'function' ? undefined : element
}

const App = () => {
  const sayHello = () => console.log('Say Hello')
  const title = useClick(sayHello)
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  )
}

export default App
