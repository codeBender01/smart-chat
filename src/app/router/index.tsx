import {lazy, Suspense} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';
import ChatView from '@app/layouts/ChatView';
import Loading from '@app/layouts/Loading';

const ChatWindow = lazy(() => import('../pages/ChatWindow'));
const BlankPage = lazy(() => import('../pages/BlankPage'));

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
            ],
        },

        {path: '*', element: <Navigate to="/chat-view" replace />},
    ]);

    return routes;
}
