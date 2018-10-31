/**
 * 这是精灵类，
 * 作用，用来创建所有的游戏精灵（角色）
 * 这个类中应该提供所有游戏精灵的一些公共的属性或方法
 * 精灵特有的属性或方法应该放在精灵对象自身
 */
export default class Sprite{
  constructor(config){
    //图片
    this.img = config.img;
    //位置
    this.x = config.x;
    this.y = config.y;
    //宽高
    this.width = config.width;
    this.height = config.height;

  }

  //渲染自己的方法
  render(ctx){
    //canvans 中用来绘制图片
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}