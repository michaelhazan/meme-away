import { isMobile } from 'react-device-detect';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Layout } from './components/Layout';
import { EnterGame } from './pages/EnterGame';
import { EnterUsername } from './pages/EnterUsername';
import { GameRoom } from './pages/GameRoom';
import { LeaderBoard } from './pages/LeaderBoard';
import { MemeCreation } from './pages/MemeCreation';
import { NotFoundPage } from './pages/NotFoundPage';
import { CSSPrioritize } from './components/StyledEngineProvider';
import { NotMobile } from './pages/NotMobile';
import { ResultsPage } from './pages/ResultsPage';
import { VotingStage } from './pages/VotingStage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      ...(isMobile
        ? [
            {
              path: 'enter-username',
              element: <EnterUsername />,
            },
            {
              path: 'enter-game',
              element: <EnterGame />,
              children: [
                {
                  path: 'game/:roomId',
                  element: <GameRoom />,
                  children: [
                    { path: 'create', element: <MemeCreation /> },
                    { path: 'vote', element: <VotingStage /> },
                    { path: 'results', element: <ResultsPage /> },
                  ],
                },
                { path: 'leaderboard', element: <LeaderBoard /> },
              ],
            },
          ]
        : [
            {
              path: '',
              element: <NotMobile />,
            },
          ]),
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export function App() {
  return (
    <CSSPrioritize>
      <RouterProvider router={router} />
    </CSSPrioritize>
  );
}
