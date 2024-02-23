import { useNavigate } from "react-router-dom"

const Navigation = () => {
    const navigate = useNavigate()
  return (
    <ul className="flex items-center justify-center gap-10 py-2 text-xl bg-neutral-200">
      <li onClick={() => navigate('/')}>Home</li>
      <li onClick={() => navigate('/aboutUs')}>About us</li>
    </ul>
  )
}

export default Navigation
