import { Routes } from '@angular/router';
import { AppLayout } from './layout/app-layout/app-layout';
import { TasksHomePage } from './features/tasks/pages/tasks-home-page/tasks-home-page';
import { TodayPage } from './features/tasks/pages/today-page/today-page';
import { ImportantPage } from './features/tasks/pages/important-page/important-page';
import { CompletedPage } from './features/tasks/pages/completed-page/completed-page';
import { NoPressurePage } from './features/tasks/pages/no-pressure-page/no-pressure-page';
import { NoDatePage } from './features/tasks/pages/no-date-page/no-date-page';
import { UpcomingPage } from './features/tasks/pages/upcoming-page/upcoming-page';

export const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: '',
        component: TasksHomePage,
      },
      {
        path: 'today',
        component: TodayPage,
      },
      {
        path: 'upcoming',
        component: UpcomingPage,
      },
      {
        path: 'no-date',
        component: NoDatePage,
      },
      {
        path: 'important',
        component: ImportantPage,
      },
      {
        path: 'completed',
        component: CompletedPage,
      },
      {
        path: 'no-pressure',
        component: NoPressurePage,
      },
    ],
  },
];
