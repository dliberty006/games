//导入精灵类
import Sprite from '../../base/sprite'
//导入游戏配置文件
import config from '../../config'

/**
 * 这是 replay 场景中的标题角色
 */

 const landList = []

for(let i = 0;i< 3;i++) {
    const landSprite =  new Sprite({
        //此处，我们需要存放一个图片的名称
        //将来等到游戏的图片资源类加载完成后，从这个资源中根据名称去除对应的图片就可以进行图片渲染
        img: 'land',
        ...config.gameInfo.land,
        x : i * config.gameInfo.land.width,

        init() {
            this.x = i * config.gameInfo.land.width
        },

        update() {
            this.x += this.speed
     
            if (this.x <= -this.width) {
             this.x += this.width * 3
            }
        }
    })
    landList.push(landSprite)
}

export default landList