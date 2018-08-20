import request from '@/utils/request'

export function fetchTableData(query) {
  return request({
    url: 'http://127.0.0.1:8080/api/test',
    method: 'GET',
    params: query
  })
}
