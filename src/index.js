/**
 * 创建时间：2016年9月19日 10:51:04
 * 创建人：JaminHuang
 * 描述：主入口文件
 */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router'
import routes from './containers/root';
import 'babel-polyfill';

ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('wrapper'));