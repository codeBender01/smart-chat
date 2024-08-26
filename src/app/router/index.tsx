import {lazy, Suspense} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';
import ChatView from '@app/layouts/ChatView';
import ChatViewMobile from '@app/layouts/ChatViewMobile';
import Loading from '@app/layouts/Loading';

//layouts
const MainLayout = lazy(() => import('../layouts/MainLayout'));

const ChatWindow = lazy(() => import('../pages/ChatWindow'));
const BlankPage = lazy(() => import('../pages/BlankPage'));
const ChatSupportWindow = lazy(() => import('../pages/CharSupportWindow'));
const TermsAndConditions = lazy(() => import('../pages/TermsAndConditions'));

export default function Router() {
    const routes = useRoutes([
        {
            element: (
                <Suspense fallback={<Loading />}>
                    <ChatView />
                </Suspense>
            ),
            path: '/chat-view',
            children: [
                {
                    element: <ChatWindow />,
                    path: '/chat-view/:chatId',
                },
                {
                    element: <BlankPage />,
                    path: '/chat-view',
                },
                {
                    element: <ChatSupportWindow />,
                    path: '/chat-view/support',
                },
            ],
        },
        {
            element: (
                <Suspense fallback={<Loading />}>
                    <ChatViewMobile />
                </Suspense>
            ),
            path: '/chat-view-mobile',
            children: [
                {
                    element: <BlankPage />,
                    path: '/chat-view-mobile',
                },
                {
                    element: <ChatWindow />,
                    path: '/chat-view-mobile/:chatId',
                },
                {
                    element: <ChatSupportWindow />,
                    path: '/chat-view-mobile/support',
                },
            ],
        },
        {
            element: (
                <Suspense fallback={<Loading />}>
                    <MainLayout />
                </Suspense>
            ),
            path: '/about',
            children: [
                {
                    element: <TermsAndConditions />,
                    path: '/about',
                },
            ],
        },

        {path: '*', element: <Navigate to="/chat-view" replace />},
    ]);

    return routes;
}
