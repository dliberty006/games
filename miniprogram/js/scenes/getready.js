//导入场景
import Scene from '../base/scene'

//导入当前场景的角色
import getreadytitle from '../roles/getready/getreadytitle'
import tap from '../roles/getready/tap'
import sky from '../roles/getready/sky'
import landList from '../roles/getready/land'
import bird from '../roles/getready/bird'

/**
 * 创建start场景
 */

 export default new Scene({
     //当前场景角色列表
     roles:[
         //注意：角色添加问题 z-index
        sky,
        getreadytitle,
        tap,
        ...landList,
        bird
        
    ]
 })