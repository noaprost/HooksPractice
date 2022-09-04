//보통 웹사이트에서 쓰이는건데
//유저가 떠나려 할때 "어디가 아직 저장 안했잖아!" 해주는 것

//이건 함수가 아님
//이건 Hooks를 요구하지 않음
const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault()
    event.returnValue = ''
  }
  //API에 뭔가를 보냈고, 사람들이 닫지 않기를 바란다면
  //1. 이걸 보호할 수 있게 활성화
  //2. API가 응답을 해서 괜찮은 상태면 사람들이 닫는걸 신경쓰지 않아도 됨

  //beforeunload는 wondow가 닫히기 전에 function이 샐행되는 걸 허락
  const enablePrevent = () => window.addEventListener('beforeunload', listener)
  const disablePrevent = () => window.removeEventListener('beforeunload', listener)

  return { enablePrevent, disablePrevent }
}

const App = () => {
  const {enablePrevent, disablePrevent} = usePreventLeave();
  return <div>
    <button onClick={enablePrevent}>Protect</button>
    <button onClick={disablePrevent}>Unprotect</button>
  </div>
}

export default App
