import request from '@/utils/request'

export function getLog(query) {
  return request({
    url: 'http://localhost:8080/api/getLog',
    method: 'GET',
    params: query
  })
}

export function singleCleanCache(server) {
  const data = { server }
  return request({
    url: 'http://localhost:8080/api/singleCleanCache',
    method: 'POST',
    data
  })
}

export function muiltCleanCache(servers) {
  const data = { servers }
  return request({
    url: 'http://localhost:8080/api/muiltCleanCache',
    method: 'POST',
    data
  })
}
