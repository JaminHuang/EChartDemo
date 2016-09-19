/**
 * 创建时间：2016年9月19日 10:51:04
 * 创建人：JaminHuang
 * 描述：公共请求文件
 */
'use strict';
import fetch from 'isomorphic-fetch';
const baseUrl = "http://xxx";

export function FetchPost(url, data) {
    return fetch(`${baseUrl}/${url}`, {
        headers: {"Content-Type": "application/json"},
        method: 'POST',
        body: JSON.stringify(data)
    }).then(response=> {
        return response.json();
    })
}
