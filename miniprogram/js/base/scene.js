/**
 * 场景类
 */
export default class Scene{

    constructor(config){
        //游戏中的精灵（角色）
        //roles 是一个数组
        this.roles = config.roles
    }

    update() {
        this.roles.forEach(role => {
            role.update()
        });
    }

    /**
     * 渲染当前场景
     * 遍历当前场景中所有的角色对象，分别调用每个角色的渲染自己的方法
     */
    render(ctx,delta){

        this.roles.forEach(role => {
            role.render(ctx,delta)
        });
        this.update()
    }

    /**
     * 每个场景都有自己的事件，一次在基类中添加
     * @param {} e 
     */
    click(e) {
        //遍历当前场景所有角色，分别触发每个角色中绑定的事件
        //如果角色绑定了事件，那么触发
        const clientX = e.touches[0].clientX
        const clientY = e.touches[0].clientY
        this.roles.forEach(role =>{
            if (clientX >= role.x && clientX <= (role.x+role.width) &&
            clientY >= role.y && clientY <= (role.y + role.height)) {
                role.click()
            }
        })
    }
}