import request from 'superagent'

const mediaUrl = 'http://localhost:3000/api/v1/media'

export function getMedia () {
  request
    .get(`${mediaUrl}/`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get users')
    })
}
