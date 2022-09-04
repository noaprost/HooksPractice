//알림을 보내는 기능을 하는 함수
//hook은 아님

//options에는 body, icon등 여러가지가 올 수 있음
const useNotification = (title, options) => {
  //Notification이 window에 있어야만 함
  //window가 아니면 Notification을 지원하지않고 그러면 멈춰야함
  if (!('Notification' in window)) {
    return
  }
  const fileNotif = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission() //권한을 요청하는 부분
      if (Notification.permission === 'granted') {
        new Notification(title, options)
      } else {
        return
      }
    } else {
      new Notification(title, options)
    }
  }
  return fileNotif
}

const App = () => {
  const triggerNotif = useNotification('Can I love you?', {
    body: 'I love you',
  })
  return (
    <div>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  )
}

export default App
