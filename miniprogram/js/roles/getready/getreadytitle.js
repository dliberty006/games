//导入精灵类
import Sprite from '../../base/sprite'
//导入游戏配置文件
import config from '../../config'

/**
 * 这是 start 场景中的标题角色
 */
export default new Sprite({
    //此处，我们需要存放一个图片的名称
    //将来等到游戏的图片资源类加载完成后，从这个资源中根据名称去除对应的图片就可以进行图片渲染
    img: 'getready',
    ...config.gameInfo.getready
})
