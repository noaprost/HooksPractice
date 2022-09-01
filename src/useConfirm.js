//사용자가 어떠한 이벤트를 실행하려 할때 '정말 이거 실행하는거 맞아?' 해주는 것
//예를 들면 영구 삭제 되는 버튼

const useConfirm = (massage, callback, rejection) => {
  //함수형 프로그래밍을 이해하는데 도움이 되는 부분
  //생략가능
  if (typeof callback !== 'function') return

  const confirmAction = () => {
    if (window.confirm(massage)) {
      callback()
    } else {
      rejection()
    }
  }
  return confirmAction
}

const App = () => {
  const deleteWorld = () => console.log('Deleting the world...')
  const abort = () => console.log('Aborted')
  const confirmDelete = useConfirm('Are you sure', deleteWorld, abort)

  return (
    <div>
      <button onClick={confirmDelete}>Delete the world!!!</button>
    </div>
  )
}

export default App
