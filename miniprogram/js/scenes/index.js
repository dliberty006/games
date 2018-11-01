/**
 * 游戏场景管理器
 * 作用：
 * 1 管理游戏中所有的场景
 * 2 渲染场景
 * 3 切换场景
 * 4 处理当前场景事件
 */

 //导入start 
 import start from './start'
 import getready from './getready'
 import running from './running'
 

 export default {
     //游戏场景集合
     scenesList:{
         start,
         getready,
         running
     },
    // 当前场景名称 默认  start
  currntSceneName: 'start',


     /**
      * 触发当前场景事件
      * @param {*} e 
      */

     click(e) {
        this.scenesList[this.currntSceneName].click(e)
     },
     /**
      * 渲染场景
      */
    render(ctx,delta) {
        //根据当前场景名称获取当前场景
        //并且渲染当前场景
       // console.log('场景渲染器已经渲染')
       this.scenesList[this.currntSceneName].render(ctx,delta)
       
    },

    /**
     * 切换场景
     */
    changeScene(sceneName) {

        this.scenesList[sceneName].init()
        //切换场景的时候，决定是否复用上一场景的角色
        this.currntSceneName = sceneName
    }
 }