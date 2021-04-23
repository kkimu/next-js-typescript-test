import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  const {id} = router.query

  return <div>
    <h1>Post</h1>
    <p>id: {id}</p>
  </div>
}
