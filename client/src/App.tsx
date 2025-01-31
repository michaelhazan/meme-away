import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import { Layout } from './components/Layout';
import { EnterUsername } from './pages/EnterUsername';
import { NotMobile } from './pages/NotMobile';
import { EnterGame } from './pages/EnterGame';
import { GameRoom } from './pages/GameRoom';
import { MemeCreation } from './pages/MemeCreation';
import { VotingStage } from './pages/VotingStage';
import { ResultsPage } from './pages/ResultsPage';
import { LeaderBoard } from './pages/LeaderBoard';
import { NotFoundPage } from './pages/NotFoundPage';
import { CSSPrioritize } from './components/StyledEngineProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      ...(isMobile
        ? [
            {
              path: 'enterusername',
              element: <EnterUsername />,
            },
            {
              path: 'entergame',
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
