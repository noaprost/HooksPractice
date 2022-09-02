// navigator이 online or offline이 되는 걸 막아줌

import { useEffect, useState } from 'react'

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine)
  const handleChange = () => {
    if (typeof onChange === 'function') {
      onChange(navigator.onLine)
    }
    setStatus(navigator.onLine)
  }
  useEffect(() => {
    window.addEventListener('online', handleChange)
    window.addEventListener('offline', handleChange)
    return () => {
      window.removeEventListener('online', handleChange)
      window.removeEventListener('offline', handleChange)
    }
  }, []) //이벤트 리스너 중복생성을 막기 위해 의존성 제거
  return status
}

const App = () => {
  const handleNetworkChange = (online) => console.log(onLine ? "Online" : "Offline")
  const onLine = useNetwork(handleNetworkChange)
  return (
    <div>
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  )
}

export default App
