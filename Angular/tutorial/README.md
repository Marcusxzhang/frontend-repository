# Angular 教程 -- 大漠穷秋 #

## 搭建开发环境 ##
## 组建概述 ##
## 把CSS预编译器改成SASS ##
## 组建模版 ##
需要深入了解以下知识点：
* 对比各种JS模版引擎的设计思路
* Mustache（八字胡）语法
* 模板内的局部变量
* 属性绑定，事件绑定，双向绑定
* 在模板里面使用结构型指令 *ngIf, *ngFor, *ngSwitch
* 在模版里面使用属性型指令 NgClass, NgStyle, NgModel
* 在模版里使用管道格式化数据
* 一些小的Feature
  
#### 对比各种JS模版引擎的设计思路 ####
#### Mustache（八字胡）语法 ####
也就是`{{...}}`，需要掌握以下几点：  
* 它可以获取到组件里面定义的属性值
* 它可以进行自动计算简单的数学表达式
* 它可以获得方法的返回值
  
#### 模板内的局部变量 ####

#### 属性绑定 ####
属性绑定是用方括号做的，写法如下：  
`<img [src]="imgSrc" />`  
`public imgSrc:string = '../1.jpg';`  
  
很明显，属性绑定属于**单向绑定**。  
  
#### 事件绑定 ####
事件绑定是用圆括号做的，写法如下：
```html
<button class="btn btn-success" (click)="btnClick($event)">Event</button>
```  
```javascript
public btnClick(event): void {
    console.log('Success');
}
```  
  
#### 双向绑定 ####

#### 在模版里面使用结构型指令 ####
#### 在模版里面使用属性型指令 ####
NgClass代码如  
  
NgStyle代码如：  
```html
<div [ngStyle]="currentStyles">NgStyle</div>
<button (click)="setCurrentStyles()">Set</button>
```  
```typescript
public currentStyles: {};
public canSave: boolean = false;
public isUnchanged: boolean = false;
public isSpecial: boolean = false;

setCurrentStyles() {
    this.currentStyles = {
        'font-style': this.canSave ? 'italic' : 'normal';
        'font-weight': !this.isUnchanged ? 'bold' : 'normal';
        'font-size': this.isSpecial ? '36px' : '12px';
    }
}
```
但由于这种方法类似于将CSS写进代码里，有点违反注意点分离的原则，所以不推荐这样写。  
  
NgModel代码如，  
如果要使用NgModel进行双向绑定，要在对应的模块里import FormsModule。  
  
#### 管道 ####
管道的其中一个典型作用就是用来**格式化数据**和**国际化**，如例子：  
`{{currentTime | date:'yyyy-MM-dd HH:mm:ss}}`  
`public currentTime:Date = new Date();`  
  
比较经典的管道例子（12个）：  
| AsyncPipe      | DatePipe      | I18nPluralPipe |
| I18nSelectPipe | JsonPipe      | LowerCasePipe  |
| CurrencyPipe   | DecimalPipe   | PercentPipe    |
| SlicePipe      | UpperCasePipe | TitleCasePipe  |  
  
自定义管道参考[todo.html](https://www.google.com)。  
  
## 组件间通讯 ##
## 生命周期钩子 ##
## 组建特效 ##
## ShadowDOM组件 ##
## 内容投影 ##
## @ContentChild & @ContentChildren ##
## @ViewChild & @ViewChildren ##
## 与Polymer封装组建的方式简单对比 ##
## 封装并发布组件库 ##
## 指令简介 ##
## 自定义指令 ##
## 直接在组件里面操作DOM ##
## 模块@NgModule ##
## 路由概述 ##
## 路由的使用 ##
## 模块预加载 ##
## 路由守卫 ##
## 多重出口 ##
## 表单快速上手 ##
## 双向数据绑定 ##
## 表单校验 ##
## 模型驱动型表单 ##
## 动态表单 ##
## 服务 ##
## RxJS快速上手 ##
## 国际化 ##
## 自动化测试 ##
## 注射器树基础知识 ##
## Angular依赖注入的基本玩法 ##
## @Injectable & @Inject ##
## @Self装饰器 ##
## @Optional ##
## @SkipSelf ##
## @Host ##
## 手动操作注射器实例 ##
## 综合实例OpenWMS介绍 ##
## 快速上手PWA ##
## 参考资源 ##
## Angular 5.0引入的新特性 ##
## Angular 6.0引入的新特性 ##
## Angular 7.0引入的新特性 ##