//导入场景
import Scene from '../base/scene'

//导入当前场景的角色
import FlyappBirdTitle from '../roles/start/flyapptitle'
import replay from '../roles/start/replay'
import sky from '../roles/start/sky'
import landList from '../roles/start/land'
import bird from '../roles/start/bird'

/**
 * 创建start场景
 */

 export default new Scene({
     //当前场景角色列表
     roles:[
         //注意：角色添加问题 z-index
        sky,
        FlyappBirdTitle,
        replay,
        ...landList,
        bird
        
    ]
 })