//문서의 제목을 업데이트 해주는 Hooks
//보통 이 경우 helmet을 사용
import { useEffect, useState } from 'react'
import './styles.css'

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle)
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title')
    htmlTitle.innerText = title
  }
  useEffect(updateTitle, [title])
  return setTitle
}

const App = () => {
  const titleUpdator = useTitle('Loading...')
  setTimeout(() => titleUpdator('Home'), 3000)
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  )
}

export default App
