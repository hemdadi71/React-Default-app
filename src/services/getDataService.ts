import http from "./httpService"


export function getDataService() {
  try {
    const response = http.get('/character')
    return response
  } catch (error) {
    console.log(error)
  }
}
