import {lazy, Suspense} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';
import ChatView from '@app/layouts/ChatView';
import ChatViewMobile from '@app/layouts/ChatViewMobile';
import Loading from '@app/layouts/Loading';

//layouts
const MainLayout = lazy(() => import('../layouts/MainLayout'));
const MainLayoutMobile = lazy(() => import('../layouts/MainLayoutMobile'));
const SettingsLayout = lazy(() => import('../layouts/SettingsLayout'));
const SettingsMobileLayout = lazy(() => import('../layouts/SettingsMobileLayout'));

//pages
const ChatWindow = lazy(() => import('../pages/ChatWindow'));
const BlankPage = lazy(() => import('../pages/BlankPage'));
const ChatSupportWindow = lazy(() => import('../pages/CharSupportWindow'));
const TermsAndConditions = lazy(() => import('../pages/TermsAndConditions'));
const Password = lazy(() => import('../pages/Password'));
const Currency = lazy(() => import('../pages/Currency'));
const Language = lazy(() => import('../pages/Language'));
const Payments = lazy(() => import('../pages/Payments'));
const Account = lazy(() => import('../pages/Account'));
const AdminChatSupportWindow = lazy(() => import('../pages/AdminChatSupportWindow'));

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
        {
            element: (
                <Suspense fallback={<Loading />}>
                    <MainLayoutMobile />
                </Suspense>
            ),
            path: '/about-mobile',
            children: [
                {
                    element: <TermsAndConditions />,
                    path: '/about-mobile',
                },
            ],
        },
        {
            element: (
                <Suspense fallback={<Loading />}>
                    <SettingsLayout />
                </Suspense>
            ),
            path: '/settings',
            children: [
                {
                    element: <Password />,
                    path: '/settings/password',
                },
                {
                    element: <Currency />,
                    path: '/settings/currency',
                },
                {
                    element: <Language />,
                    path: '/settings/language',
                },
                {
                    element: <Account />,
                    path: '/settings/account',
                },
                {
                    element: <Payments />,
                    path: '/settings/payments',
                },
            ],
        },
        {
            element: (
                <Suspense fallback={<Loading />}>
                    <SettingsMobileLayout />
                </Suspense>
            ),
            path: '/settings-mob',
            children: [
                {
                    element: <Password />,
                    path: '/settings-mob/password',
                },
                {
                    element: <Currency />,
                    path: '/settings-mob/currency',
                },
                {
                    element: <Language />,
                    path: '/settings-mob/language',
                },
                {
                    element: <Payments />,
                    path: '/settings-mob/payments',
                },
                {
                    element: <Account />,
                    path: '/settings-mob/account',
                },
            ],
        },
        {
            element: (
                <Suspense fallback={<Loading />}>
                    <ChatView />
                </Suspense>
            ),
            path: '/admin',
            children: [
                {
                    element: <AdminChatSupportWindow />,
                    path: '/admin/:chat-id',
                },
            ],
        },
        {
            element: (
                <Suspense fallback={<Loading />}>
                    <ChatViewMobile />
                </Suspense>
            ),
            path: '/admin-mobile',
            children: [
                {
                    element: <AdminChatSupportWindow />,
                    path: '/admin-mobile/:chat-id',
                },
            ],
        },

        {path: '*', element: <Navigate to="/chat-view" replace />},
    ]);

    return routes;
}
