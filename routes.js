import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const LineConfiguration = React.lazy(() => import('./views/line/line-configuration/LineConfiguration'));
const LinePlanning = React.lazy(() => import('./views/line/line-planning/LinePlanning'));
const LineScheduling = React.lazy(() => import('./views/line/line-scheduling/LineScheduling'));
const UserProfiling = React.lazy(() => import('./views/admin/user-management/UserProfiling'));
const UserPermission = React.lazy(() => import('./views/admin/permission/user-permission'));
const GroupManagement = React.lazy(() => import('./views/admin/group-management/GroupManagement'));
const LineProcess = React.lazy(() => import('./views/admin/line-Process/LineProcess'));

const login = React.lazy(() => import('./views/Pages/Login'));
// const lineloading = React.lazy(() => import('./views/line-loading'));
// const Login = React.lazy(() => import('./views/Pages/Login'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/line/line-configuration', name: 'Line Configuration', component: LineConfiguration },
  { path: '/line/line-planning', name: 'Planning', component: LinePlanning },
  { path: '/line/line-scheduling', name: 'Scheduling', component: LineScheduling }, 
  { path: '/admin/user-management', name: 'UserProfiling', component: UserProfiling}, 
  { path: '/admin/user-permission', name: 'UserPermission', component: UserPermission}, 
  { path: '/admin/group-management', name: 'GroupManagement', component: GroupManagement}, 
  { path: '/admin/line-Process', name: 'LineProcess', component: LineProcess}, 

  { path: '/login', name: 'Scheduling', component: login }
  // { path: '/lineloading', name: 'line Loading', component: lineloading },  
];

export default routes;
