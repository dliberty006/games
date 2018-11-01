//导入精灵类
import Sprite from '../../base/sprite'
//导入游戏配置文件
import config from '../../config'

import databus from '../../databus'

//最大旋转角度
const MAX_ANGLE = 90
const MAX_SPEED = 12

const MAX_HIEGHT = databus.screenHeight - config.gameInfo.land.height

//当前速度/最大速度 = 当前角度/最大角度

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

    init(){
        this.x = config.gameInfo.bird.x
        this.y = config.gameInfo.bird.y
        this.speed = 0
    },

    // 因为小鸟图片的绘制方式与其它不同
    //因此，sprite基类中的render无法渲染

    //重写
    render(ctx,delta) {
        
        this.speed = (this.speed + this.a * delta)
        this.y += (this.speed * delta + 1/2 * this.a * delta * delta) * 30

        if (this.y >= MAX_HIEGHT) {
            this.y = MAX_HIEGHT
        }

        //保存状态
        ctx.save()

        //进行小鸟的旋转，但是需要先平移
        //也就是，先平移再旋转
        ctx.translate(this.x,this.y)

        //根据当前速度计算当前旋转角度
        let curAngle = this.speed / MAX_SPEED * MAX_ANGLE

        if (curAngle > MAX_ANGLE) {
            curAngle = MAX_ANGLE
        }
        ctx.rotate(curAngle / 180 * Math.PI)

        ctx.drawImage(databus.resources.images[this.img],
           0,0,this.width,this.height,
           -1/2 * this.width,-1/2 * this.height,this.width,this.height )
        
        //恢复状态
        ctx.restore()
    }
})
