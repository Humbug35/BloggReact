const getBlogPosts = (page) => {
    let limit = 1;
    let skip = limit * page - limit;
    return fetch('http://192.168.99.100:8090/api/collections/get/blogg?token=6779502b8c2f401cb5ec7f1603e2f4', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            limit: limit,
            skip: skip,
            sort: {_created: 1},
        })
    })
    .then(collections => collections.json())
    .then(collections => collections)
}
export default getBlogPosts;