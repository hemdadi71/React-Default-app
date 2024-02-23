import { useNavigate } from 'react-router-dom'
import { CardProps } from 'src/interfaces'

const Card: React.FC<CardProps> = ({ item }) => {
  const { id, name, gender, image } = item
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/${id}`)}
      className="flex items-center gap-5 bg-neutral-100 rounded-xl p-5">
      <img width={200} src={image} className="rounded-full" />
      <div>
        <p>{name}</p>
        <p>gender: {gender}</p>
      </div>
    </div>
  )
}

export default Card
