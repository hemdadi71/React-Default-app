import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleData } from 'src/services/getSingleData'
import { item } from 'src/types'

const SingleCharacter = () => {
  const [data, setData] = useState({} as item)
  const params = useParams()
  useEffect(() => {
    getSingleData(params.id!)?.then(({ data }) => setData(data))
  }, [params.id])

  return (
    <div className="p-5 flex gap-3 items-center">
      <img src={data?.image} className="rounded-xl" />
      <div>
        <p>{data?.name}</p>
        <p>gender:{data?.gender}</p>
      </div>
    </div>
  )
}

export default SingleCharacter
