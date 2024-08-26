import {lazy, Suspense} from 'react';
import {useRoutes} from 'react-router-dom';
import ChatView from '@app/layouts/ChatView';
import Loading from '@app/layouts/Loading';

const ChatWindow = lazy(() => import('../pages/ChatWindow'));

export default function Router() {
    const routes = useRoutes([
        {
            element: (
                <Suspense fallback={<Loading />}>
                    <ChatView />
                </Suspense>
            ),
            path: '/',
            children: [
                {
                    element: <ChatWindow />,
                    path: '/chat-view/:chatId',
                },
            ],
        },
    ]);

    return routes;
}
