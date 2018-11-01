//导入精灵类
import Sprite from '../../base/sprite'
//导入游戏配置文件
import config from '../../config'

import databus from '../../databus'

/**
 * 这是 replay 场景中的标题角色
 */
export default new Sprite({
    //此处，我们需要存放一个图片的名称
    //将来等到游戏的图片资源类加载完成后，从这个资源中根据名称去除对应的图片就可以进行图片渲染
    img: 'birds',
    ...config.gameInfo.bird,

    a:9.8,
    speed:0,

    // 因为小鸟图片的绘制方式与其它不同
    //因此，sprite基类中的render无法渲染

    //重写
    render(ctx,delta) {
        //console.log('鸟')

        //小鸟下落，匀加速直线运动
        // S = V * t + 1/2 * a * t * t
        // V = v0 + a * t
        this.speed = (this.speed + this.a * delta)
        this.y += (this.speed * delta + 1/2 * this.a * delta * delta) * 30


        if (this.y >= 210) {
            this.speed = -4.5
        }


        ctx.drawImage(databus.resources.images[this.img],
           0,0,this.width,this.height,
           this.x,this.y,this.width,this.height )
    }
})
