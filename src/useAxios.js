import defaultAxios from 'axios'
import { useEffect, useState } from 'react'

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  })

  const [trigger, setTrigger] = useState(0)

  const refetch = () => {
    setState({ ...state, loading: true })
    setTrigger(Date.now()) //숫자를 생성
  }

  useEffect(() => {
    axiosInstance(opts)
      .then((response) => {
        setState({
          ...state,
          loading: false,
          data: response,
        })
      })
      .catch((error) => {
        setState({ ...state, loading: false, error })
      })
  }, [trigger])
  return { ...state, refetch }
}

const App = () => {
  const { loading, data, refetch } = useAxios({
    url: 'yts.am/api/v2/list_movies.json',
  })

  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && 'Loading'}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  )
}

export default App
