//导入精灵类
import Sprite from '../../base/sprite'
//导入游戏配置文件
import config from '../../config'
import databus from '../../databus'

/**
 * 这是 replay 场景中的标题角色
 */

const pipeSpriteList = []

for (let i = 0; i < 3; i++) {
    const pipeSprite = new Sprite({
        img: 'pipe_top',
        bottomImg:'pipe_bottom',
        ...config.gameInfo.pipe,
        x : databus.screenWidth + (config.gameInfo.pipe.width + config.gameInfo.pipe.horizontalGap) * i, 
        //下管道坐标
        bottomY : 0,

        init() {

            this.x = databus.screenWidth + (config.gameInfo.pipe.width + config.gameInfo.pipe.horizontalGap) * i
            this.setPipeY();
            this.bottomY = 0
            this.y = 0

            this.setPipeY()
        },

        /**
         * 记录管道坐标
         */
        setPostition() {
            const position = {
                startX : this.x,
                startY : this.y,
                endX : this.x + this.width,
                endY : this.y+ this.height
            }

            this.position = {
                top:position,
                bottom:{...position,startY:this.bottomY,endY:this.bottomY+this.height}
            }
        },

        //随机生成上管道高度

        setPipeY() {
            //[150,350)
            const randomHeight = Math.random() * 200 + 150
            //上管道
            this.y = randomHeight - this.height
            //下管道
            this.bottomY = randomHeight + this.verticalGap
        },

        update() {
            this.x += this.speed

            if (this.x < - (this.width + this.horizontalGap)) {
                this.x += (this.width + this.horizontalGap) * 3
                this.setPipeY();
            }

            this.setPostition()
        },

        /**
         * 绘制管道，管道自己的绘制方法
         * @param {object} ctx 
         */
        render(ctx){
            ctx.drawImage(databus.resources.images[this.img], this.x, this.y, this.width, this.height);
            ctx.drawImage(databus.resources.images[this.bottomImg], this.x, this.bottomY, this.width, this.height);
          }
    })
    pipeSpriteList.push(pipeSprite)
}

export default pipeSpriteList
