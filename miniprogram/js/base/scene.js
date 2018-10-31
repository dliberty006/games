/**
 * 场景类
 */
export default class Scene{

    constructor(config){
        //游戏中的精灵（角色）
        //假设：roles是一个对象
        this.roles = config.roles
    }

    /**
     * 渲染当前场景
     * 遍历当前场景中所有的角色对象，分别调用每个角色的渲染自己的方法
     */
    render(ctx){
        for (let role in this.roles) {
            role.render(ctx)
        }
    }
}