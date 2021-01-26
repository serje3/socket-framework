import authorize
URLS = {
    '/': authorize.index,
    '/login': authorize.login,
    '/register':authorize.register,
}

URLS_POST = {
    '/login': authorize.login,
    '/register':authorize.register,
    '/authorized':authorize.authorized,
    '/logout':authorize.logout
}
