//导入场景
import Scene from '../base/scene'

//导入当前场景的角色
import bird from '../roles/running/bird'
import skyList from '../roles/running/sky'
import landList from '../roles/running/land'
import pipeList from '../roles/running/pipe'
import sceneManager from '../scenes/index'
import databus from '../databus';

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
        
    ],
    //因为小鸟经常用到，所以，直接添加到当前场景对象中，方便操作
    bird,
    land:landList[0],

    init() {
        this.roles.forEach(role => {
            role.init()
        });
    },


    

    // 进行碰撞检测
    // 有限重新绘制一次，就检测一次
    // 
    update() {

        let isCollision = this.collisionDetection()
        let isLanded = this.isLanded();

        if (!databus.gameover) {
            isCollision = this.collisionDetection()
        }
        isLanded = this.isLanded();
        if (isCollision) {
            databus.gameover = true
        }  
        if (isLanded) {
            databus.gameover = true
            sceneManager.changeScene('start')
            //databus.gameover = false
        }
    },
    collisionDetection() {
        //遍历所有的管道对象，判断小鸟中心点坐标在不在管道

       return pipeList.some(pipe => {
            return this.isCollisionWidth(this.bird,pipe.position.top) ||
            this.isCollisionWidth(this.bird,pipe.position.bottom)
        })
    },

    isCollisionWidth (bird,pipe) {
        if (bird.x > pipe.startX && bird.x <= pipe.endX && 
            bird.y >= pipe.startY && bird.y <= pipe.endY) {
            return true
        }
        return false
    },

    isLanded() {
        return this.bird.y >= this.land.y
    },


    /**
     * 让小鸟随着点击跳动
     */
    click() {
        if (!databus.gameover) {
            this.bird.speed = -6
        }
    }
 })