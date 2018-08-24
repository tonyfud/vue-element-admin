/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const mytableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/mytable',
  name: 'mytable',
  meta: {
    roles: ['admin', 'editor'],
    title: '常用功能',
    icon: 'table'
  },
  children: [
    {
      path: 'mytable0',
      component: () => import('@/views/table/mytable'),
      name: 'mytable0',
      meta: { title: '缓存清理', icon: 'table' }
    },
    {
      path: 'mytable1',
      component: () => import('@/views/table/mytable'),
      name: 'mytable1',
      meta: { title: 'CDN清理', icon: 'table' }
    }
  ]
}
export default mytableRouter
