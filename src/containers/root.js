/**
 * 创建时间：2016年9月19日 10:51:04
 * 创建人：JaminHuang
 * 描述：地址跳转配置文件
 */
'use strict';
import Index from './';

import MyPie from './EChart/pie';
import MyUser from './EChart/user';
import MyBuget from './EChart/budget';
import MyLine from './EChart/line';

export default {
    component: Index,
    path: '/',
    childRoutes: [
        {
            component: MyPie,
            path: '/myPie'
        },
        {
            component: MyUser,
            path: '/myUser'
        },
        {
            component: MyBuget,
            path: '/myBuget'
        },
        {
            component: MyLine,
            path: '/myLine'
        }
    ]
}