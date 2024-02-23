import http from './httpService'

export function getSingleData(id: string) {
  try {
    const response = http.get(`/character/${id}`)
    return response
  } catch (error) {
    console.log(error)
  }
}
