module.exports = {
    // url: 'https://1337x.to/popular-movies',
    urls: [
        'https://1337x.to/search/movies/8/',
        'https://1337x.to/search/movies/9/',
        'https://1337x.to/search/movies/10/',
        'https://1337x.to/search/movies/11/',
        'https://1337x.to/search/movies/12/',
        'https://1337x.to/search/movies/13/',
        'https://1337x.to/search/movies/14/',
    ],
    requestOptions: {
        timeout: 10000,
        gzip: true
    },
    beforeRequest: function () {
        return Promise.resolve({})
    },
    afterProcessed: function (res) {
        return res
    },
    debugRequest: false,
    randomUserAgent: true,
    printRequestUrl: false,
    promiseLimit: 3,
    randomWait: 5,
    process: function ({$, url, error, createdAt}) {
        if (error) throw Error(error)
        return $('.coll-1.name a:nth-child(2)').map((i, el) => console.log($(el).text()))
    },
    next: {
        key: '',
        process: function ({$, url, error, createdAt, prevRes}) {
            if (error) throw Error(error)
            throw Error('Missing implementation next')
        }
    },
    finally: function (res, _) {
    },
    catch: function (err) {
        console.error(err)
    }
}