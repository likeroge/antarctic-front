import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'vehicles',
        component: () => import('pages/VehiclesPage.vue'),
      },
      {
        path: 'vehicles/add-vehicle',
        component: () => import('pages/AddVehiclePage.vue'),
      },
      {
        path: 'transport-notes',
        component: () => import('pages/TransportNotesPage.vue'),
      }
    ],
  },

  // {
  //   path: '/vehicles',
  //   component: () => import('pages/VehiclesPage.vue'),
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
