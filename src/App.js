import { Fragment, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { v4 } from 'uuid';
import { AuthProvider } from '~/context/Auth';
import Loading from './components/Loading';
import routes from './routes';
const PageNotFound = lazy(() => import('~/pages/PageNotFound'));
const DefaultLayout = lazy(() => import('./layouts/DefaultLayout'));

function App() {
    return (
        <AuthProvider>
            <ToastContainer />
            <Suspense fallback={<Loading />}>
                <Routes>
                    {routes.map((route) => {
                        const Component = route.element;
                        let Layout = DefaultLayout;

                        if (route.layout === null) Layout = Fragment;
                        else if (route.layout) Layout = route.layout;

                        return (
                            <Route
                                key={v4()}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Component />
                                    </Layout>
                                }
                            />
                        );
                    })}

                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Suspense>
        </AuthProvider>
    );
}

export default App;
