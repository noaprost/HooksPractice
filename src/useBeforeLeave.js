//기본적으로 탭을 닫을 때 실행되는 함수

import { useEffect } from 'react'

//function을 인자로 받을 때는 꼭 이게 function이 맞는지 확인해야함
const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== 'function') {
    return
  }

  const handle = () => {
    onBefore()
  }

  useEffect(() => {
    //마우스가 document를 벗어났을때 handle이 실행됨
    document.addEventListener('mouseleave', handle)
    return () => document.removeEventListener('mouseleave', handle)
  }, []) //이벤트가 중복 등록되는걸 막아줌
}

const App = () => {
  const begForLife = () => console.log("Please don't leave")
  useBeforeLeave(begForLife)
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App
