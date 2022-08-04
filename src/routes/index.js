import { lazy } from 'react';
import config from '~/config';
const HeaderLayout = lazy(() => import('~/layouts/HeaderLayout'));
const SettingLayout = lazy(() => import('~/layouts/SettingLayout'));
const SearchPage = lazy(() => import('~/pages/SearchPage'));
const RegisterPage = lazy(() => import('~/pages/RegisterPage'));
const PersonalInformation = lazy(() => import('~/pages/PersonalInformation'));
const MovieDetailPage = lazy(() => import('~/pages/MovieDetailPage'));
const LoginPage = lazy(() => import('~/pages/LoginPage'));
const HomePage = lazy(() => import('~/pages/HomePage'));
const FavoritePage = lazy(() => import('~/pages/FavoritePage'));
const CategoryPage = lazy(() => import('~/pages/CategoryPage'));
const CastDetailsPage = lazy(() => import('~/pages/CastDetailsPage'));
const EditProfileUser = lazy(() => import('~/pages/EditProfileUser'));
const TVPage = lazy(() => import('~/pages/TVPage'));

const routes = [
    {
        path: config.routes.home,
        element: HomePage,
    },
    {
        path: config.routes.movieDetail,
        element: MovieDetailPage,
    },
    {
        path: config.routes.cast,
        element: CastDetailsPage,
    },
    {
        path: config.routes.login,
        element: LoginPage,
        layout: null,
    },
    {
        path: config.routes.register,
        element: RegisterPage,
        layout: null,
    },
    {
        path: config.routes.personalInformation,
        element: PersonalInformation,
        layout: SettingLayout,
    },
    {
        path: config.routes.personalInformationEdit,
        element: EditProfileUser,
        layout: HeaderLayout,
    },
    {
        path: config.routes.favorite,
        element: FavoritePage,
        layout: SettingLayout,
    },
    {
        path: config.routes.category,
        element: CategoryPage,
        layout: HeaderLayout,
    },
    {
        path: config.routes.search,
        element: SearchPage,
    },
    {
        path: config.routes.tv,
        element: TVPage,
    },
    {
        path: config.routes.tvDetail,
        element: MovieDetailPage,
    },
    {
        path: config.routes.tvSearch,
        element: SearchPage,
    },
    {
        path: config.routes.castTV,
        element: CastDetailsPage,
    },
];

export default routes;
