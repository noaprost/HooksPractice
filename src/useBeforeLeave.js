//기본적으로 탭을 닫을 때 실행되는 함수

import { useEffect } from 'react'

const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    //마우스가 document를 벗어났을때 handle이 실행됨
    document.addEventListener('mouseleave', handle)
    return () => document.removeEventListener('mouseleave', handle)
  }, []) //이벤트가 중복 등록되는걸 막아줌

  //function을 인자로 받을 때는 꼭 이게 function이 맞는지 확인해야함
  if (typeof onBefore !== 'function') {
    return
  }

  //여기서 전달받는 event는 MouseEvent
  //clientY가 0보다 작은지 확인해줄 필요가 있음
  //client가 위로 벗어난 경우에만 0보다 작은 값을 갖기 때문
  //위로 벗어난 경우만 탭을 닫기 위한 행동으로 간주하고 onBefore을 실행시켜줌
  const handle = (event) => {
    const { clientY } = event
    if (clientY <= 0) {
      onBefore()
    }
  }
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
