import { useEffect, useState } from 'react'
import Card from 'src/components/Card'
import { getDataService } from 'src/services/getDataService'
import { item } from 'src/types'



const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    getDataService()?.then(({ data }) => setData(data.results))
  }, [])
  return (
    <>
      <div className='grid grid-cols-3 gap-5 p-4'>
        {data?.map((item: item) => {
          return <Card key={item?.id} item={item} />
        })}
      </div>
    </>
  )
}

export default Home
