import authorize,views

URLS = {
    '/': authorize.index,
    '/login': authorize.login,
    '/register':authorize.register,
    '/rooms':views.rooms,
}

URLS_POST = {
    '/login': authorize.login,
    '/register':authorize.register,
    '/authorized':authorize.authorized,
    '/logout':authorize.logout,
    '/rooms':views.rooms
}

ROOMS_RENDER = views.room