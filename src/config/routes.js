const routes = {
    home: '/',
    movieDetail: '/movie/:slug',
    cast: '/cast/:castId&:castSlug',
    login: '/login',
    register: '/register',
    setting: '/setting',
    personalInformation: '/setting/personal-information',
    personalInformationEdit: '/setting/personal-information/edit',
    favorite: '/setting/favorite',
    category: '/category/:category',
    search: '/search',
    tv: '/tv',
    tvDetail: '/tv/:slug',
    tvSearch: '/tv/search',
    castTV: '/tv/cast/:castId&:castSlug',
};

export default routes;
