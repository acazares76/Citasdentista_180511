
let staticCache = 'cacheV1';
let dynamicCache='dynamicCacheV1';
let immutableCache='immutableCacheV1';

self.addEventListener('install', result =>{
const static_cache = caches.open(staticCache).then(cacheStatic=>{
    cacheStatic.addAll(files)
})

const immutable_cache = caches.open(immutableCache).then(cacheImmutable=>{
    cacheImmutable.addAll(immutableFiles)
})
result.waitUntil(
Promise.all([static_cache,immutable_cache])
)
    let files = [
        '/',
    '/index.html','CSS'
    ]
    let immutableFiles=[

    ]
    caches.open(immutableCache)
    .then(cache =>{
        return cache.addAll(files)
    })
    .catch(()=>{
        console.log('algo salio mal')
    })
})
