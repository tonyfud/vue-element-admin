/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const mytableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/mytable',
  name: 'mytable',
  meta: {
    title: 'mytable',
    icon: 'table'
  },
  children: [
    {
      path: 'mytable0',
      component: () => import('@/views/table/mytable'),
      name: 'mytable0',
      meta: { title: 'mytable', icon: 'table' }
    },
    {
      path: 'mytable1',
      component: () => import('@/views/table/mytable'),
      name: 'mytable1',
      meta: { title: 'mytable-1', icon: 'table' }
    },
    {
      path: 'mytable2',
      component: () => import('@/views/table/mytable'),
      name: 'mytable2',
      meta: { title: 'mytable-2', icon: 'table' }
    }
  ]
}
export default mytableRouter
