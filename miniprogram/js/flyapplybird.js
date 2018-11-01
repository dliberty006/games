// 游戏主对象
/**
 * 1. 加载资源文件
 * 2. 开启游戏主循环
 * 3. 控制游戏时间
 */

 //导入游戏配置文件

 import config from './config'
 import databus from './databus'
 import sceneManger from './scenes/index'

//获取到绘制上下文
const ctx =  canvas.getContext('2d')

export default class FlyapplyBird{

    constructor(){

        this.render = this.render.bind(this );

        //开始游戏
        this.start()

        //提供游戏时间
        // 时间间隔 = 当前帧的时间 - 上一帧时间
        this.delta = 0
        this.curFrameTime = new Date() - 0
        this.lastFrameTime = new Date() - 0
    }

    start() {
        this
            .loadResources()
            .then(() => {
                //console.log(databus.resources)

                this.curFrameTime = new Date() - 0
                this.lastFrameTime = new Date() - 0
                window.requestAnimationFrame(this.render)

                //绑定事件
                //两种事件
                //1 点击某个角色
                //2 点击整个场景
                canvas.addEventListener('touchstart',(e)=>{
                    //触发当前场景中的事件
                    sceneManger.click(e)
                })
             })
    }

    /**
     * 游戏主循环，用来渲染游戏
     */
    render(){
        //获取时间间隔
        this.curFrameTime = new Date() - 0
        this.delta = (this.curFrameTime - this.lastFrameTime)/1000
        this.lastFrameTime = this.curFrameTime
       

       // console.log('render');

        // 渲染当前场景

        // 1 主循环调用场景管理器中的render方法
        // 2 场景管理器调用当前场景的render方法
        // 3 当前场景调用场景中每个角色的render方法
        // 4 每个角色通过render方法渲染到自己的页面中


        sceneManger.render(ctx,this.delta)

        window.requestAnimationFrame(this.render)
    }

   /**
    * 游戏资源
    */
    loadResources() {
        console.log('加载资源')
        //加载所有图片和音乐
        //当所有资源加载完成后，才能开始游戏
        //config.resources.IMG_NAME_LIST
        //config.resources.MUSIC_NAME_LIST

        //加载完成数量  == 所有资源数量
        const resourcesList = [
            ...config.resources.IMG_NAME_LIST,
            ...config.resources.MUSIC_NAME_LIST
        ]

        let resource = null;

        //加载完成数量
        let loadedCount = 0

        return new Promise((resolve,reject) =>{
            resourcesList.forEach(resName => {
                if (resName.endsWith('.png')) {
                    //图片资源
                    resource = new Image()
                    resource.src = `images/${resName}`
                    //添加到图片资源中
                  databus.resources.images[resName.slice(0, -4)] = resource
                } else if (resName.endsWith('.mp3')) {
                    //音乐资源
                    resource = new Audio()
                    resource.src = `audio/${resName}`
                    //添加到音乐资源中
                  databus.resources.audios[resName.slice(0, -4)] = resource
                }
    
                //监听资源是否加载完成
                resource.addEventListener('load',()=>{
                    loadedCount ++
    
                    if (loadedCount == resourcesList.length) {
                        //所有游戏资源加载完成
                        console.log('资源加载完成',resourcesList.length)
                        resolve()
                    }
                })

                resource.addEventListener('error',()=>{
                   //游戏资源加载失败
                   reject()
                })
    
                
            })
        })
        
    }
}