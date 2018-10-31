// 游戏入口
// 入口中实例化游戏对象 (flyapplybird.js),此时，会将所有的场景对象传入到游戏对象中
//创建场景对象的时候，需要把场景对象中的所有角色都创建好
//游戏对象中，开启主循环，负责渲染当前场景

import './js/libs/weapp-adapter'

// 测试创建好的场景对象

const ctx = canvas.getContext('2D');

import start from './js/scenes/start'

start.render(ctx)