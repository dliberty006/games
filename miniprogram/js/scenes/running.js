//导入场景
import Scene from '../base/scene'

//导入当前场景的角色
import bird from '../roles/running/bird'
import skyList from '../roles/running/sky'
import landList from '../roles/running/land'
import pipeList from '../roles/running/pipe'

/**
 * 创建start场景
 */

 export default new Scene({
     //当前场景角色列表
     roles:[
         //注意：角色添加问题 z-index
        ...skyList,
        ...landList,
        ...pipeList,
        bird
        
    ]
 })