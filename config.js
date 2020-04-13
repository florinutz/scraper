module.exports = {
  url: 'https://1337x.to/popular-movies',
  urls: [],
  requestOptions: {
    timeout: 10000,
    gzip: true
  },
  beforeRequest: function() { return Promise.resolve({}) },
  afterProcessed: function(res) { return res },
  debugRequest: false,
  randomUserAgent: true,
  printRequestUrl: false,
  promiseLimit: 3,
  randomWait: 5,
  process: function({ $, url, error, createdAt }) {
    if (error) throw Error(error)
    return $('.coll-1.name a:nth-child(2)').map((i, el) => console.log($(el).text()))
  },
}