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
  
#### 对比各种JS模版引擎的设计思路 ####
无论哪一套前端模版，大家都比较崇尚“轻逻辑”的设计思路。  
“轻逻辑”，就是不能在模版里面编写十分复杂的JavaScript表达式。不能有以下的表达式：  
* 不能在模版new对象。
* 不能使用= += -=这类的表达式。
* 不能用++ --运算符。
* 不能用位运算符。  
  
最主要的原因是，怕影响运行性能，因为模版可能被执行很多次。  
对于Angular来说，强调“轻逻辑”一个非常重要的原因是**在组件的整个生命周期里面，模版函数会被执行很多次**。如果每次刷新组件外观而且写了很复杂的代码，一定会造成卡顿。  
  
#### Mustache（八字胡）语法 ####
也就是`{{...}}`，需要掌握以下几点：  
* 它可以获取到组件里面定义的属性值
* 它可以进行自动计算简单的数学表达式
* 它可以获得方法的返回值
  
#### 模板内的局部变量 ####
Angular会按照以下优先级处理变量：  
**模板局部变量->指令中的同名变量->组件中的同名属性**  
  
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
双向绑定是方括号里面包含一个圆括号。  
```html
<font-resize [(size)]="font-SizePx"></font-resize>
```  
```typescript
public font-SizePx: number = 14;
```  
双向绑定对于一些赋值和取值操作会有很好的用处。  
  
#### 在模版里面使用结构型指令 ####
Angular有三种内置的结构型指令：*ngIf, *ngFor, *ngSwitch。  
  
*ngIf代码如：  
```html
<p *ngIf="isShow" style="background-color:#ff3300">text</p>
<button class="btn btn-success" (click)="toggleShow()">Toggle</button>
```  
```typescript
public isShow: boolean = true;
public toggleShow():void {
    this.isShow = !this.isShow;
}
```  
  
*ngFor代码如：
```html
<li *ngFor="let race of races;let i = index;">
    {{i+1}}-{{race.name}}
</li>
```  
```typescript
public races: Array = [
    {name:"a"},
    {name:"b"},
    {name:"c"}
];
```  
  
*ngSwitch代码如：  
```html
<div [ngSwitch]="mapStatus">
    <p *ngSwitchCase="0">downloading</p>
    <p *ngSwitchCase="1">loading</p>
    <p *ngSwitchDefault>System busy</p>
</div>
```  
```typescript
public mapStatus: number = 1;
```  
  
值得注意的是，一个HTML标签里面只有同时使用一个结构型指令。但如果非得要这样做的话，有两个办法可以实现：
* 加一层空的div标签。
* 加一层`<ng-container>`。
  
#### 在模版里面使用属性型指令 ####
NgClass代码如：  
```html
<div [ngClass]="currentClasses">NgClass</div>
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
```css
.saveable {
    font-size: 18px;
}
.modified {
    font-weight: bold;
}
.special {
    background-color: #ff3300;
}
```

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
  

NgModel代码如：  
```html
<p class="text-danger">NgModel can only use in form element.</p>
<input [(ngModel)]="currentRace.name" />
<p>{{currentRace.name}}</p>
```  
```typescript
public currentRace: any = {name: 'Random'};
```  
如果要使用NgModel进行双向绑定，要在对应的模块里import FormsModule。  
  
#### 管道 ####
管道的其中一个典型作用就是用来**格式化数据**和**国际化**，如例子：  
`{{currentTime | date:'yyyy-MM-dd HH:mm:ss}}`  
`public currentTime:Date = new Date();`  
  
比较经典的管道例子（12个）：  
* AsyncPipe
* DatePipe
* I18nPluralPipe
* I18nSelectPipe
* JsonPipe
* LowerCasePipe
* CurrencyPipe
* DecimalPipe
* PercentPipe
* SlicePipe
* UpperCasePipe
* TitleCasePipe  
  
自定义管道参考[todo.html](https://www.google.com)。  
  
## 组件间通讯 ##
## 生命周期钩子 ##
生命周期钩子的[官方文档](https://angular.io/guide/lifecycle-hooks)。  
生命周期钩子的[浓缩版](https://angular.io/guide/lifecycle-hooks)。  
在这里，只讨论四个主题：  
* 什么是UI组件的生命周期。
* Angular组件的生命周期有什么特别的地方。
* OnPush策略的使用方式。
* 简要介绍脏检查的实现原理。  
  
#### 什么是UI组件的生命周期 ####
初始化-->渲染-->存活期(内循环：事件循环)-->销毁  
  
无论是什么前端框架，只要编写UI组件，生命周期就是需要考虑的重要内容。  
* 初始化阶段： 要把组件new出来，把属性设置上去等操作。
* 渲染阶段： 这个阶段需要把组件的模版和数据结合起来，生成HTML标签然后整合到DOM树里面。
* 存活阶段： 既然有UI，那就一定会有交互。会通过大量的事件机制来处理用户事件。
* 销毁阶段： 组件使用完成后，需要将一些资源释放掉。将所有的事件全部清理干净，避免造成内存泄漏。
  
在组件生命的不同阶段，框架一般都会暴露出一些接口，用来实现一些业务逻辑。在一些框架里面叫做“事件”，在Angular里面叫做“钩子”。  
  
#### Angular组件的生命周期钩子 ####
`ngOnChanges`->`ngOnInit`->`ngDoCheck`->`ngAfterContentInit`->`ngAfterContentChecked`->`ngAfterViewInit`->`ngAfterViewChecked`->`ngOnDestory`。  
* Angular一共暴露8个钩子。
* 并没有组件或者指令会实现全部钩子。
* Content和View相关的4个钩子只对组件有效，指令上不能使用。
* **请不要在生命周期钩子里面实现复杂的业务逻辑**，尤其那些会被反复执行的钩子，否则一定会造成界面卡顿。
  
#### OnPush策略 ####
当叶子组件数据模型发生变化，Angular会从根组件开始，历遍整个组件树，把所有组件上的ngDoCheck()方法都调用一遍。如果组件树非常大，嵌套非常深，很明显有效率问题。所以有时间其实并不需要都遍历一次，所以Angular提供了一个叫做OnPush的策略，只要把某个组件的检测策略设置为OnPush，就可以忽略整个子树。  
与此同时，Angular有两种变更检测策略：  
* Default： 无论哪个组件发生变化，从根组件开始全局遍历，调用每个组件的ngDoCheck()钩子。
* OnPush： 只有当组件的@Input属性发生变化，才会调用本组件的ngDoCheck()钩子。
  
#### 简要介绍脏检查的实现原理 ####
双向数据绑定的目标很明确，数据模型发生变化，界面可以自动刷新；用户修改了界面内容，数据模型也会自动修改。这里存在一种同步机制，叫做**变更检测**。  
新版本的Angular使用**Zone.js**来将所有可能导致数据模型发生变更的情况全部拦截掉，去通知Angular进行刷新。因为浏览器可能导致数据模型发生变化的情况只有三种：  
* 事件回调： 鼠标、键盘、触摸
* 定时器回调：setTimeout和setInterval
* Ajax回调  
  
Zone.js实现原理是：当开发着调用这些函数的时候，是调用Zone.js自己的方法。  
第三方详细的[解释文档](https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html)。  

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
在组件的构造函数里声明，Angular会在运行时自动把Service实例创建出来并注射给组件。  
```typescript
constructor(
    private userListService: UserListService
) {}
```   
  
如果我们要Service是全局单例，就需要定义到根模块里。
```typescript
@NgModule({
    ...
    providers: [userListService],
    ...
})
```  
  
如果我们在组件内部的`providers`里面也配置了一个UserListService，如：  
```typescript
@Component({
    selector: 'order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['.order-list.component.scss'],
    providers: [UserListService]
})
```   
很明显就不是一个实例了。  
原理是因为在新版本的Angular里面，每个组件都有自己的注射器(Injector)。我们的UserListService是通过**依赖注入**注射给组件的，DI机制会按照以下顺序来查找服务实例：  
* 优先使用组件内部的providers。
* 继续向父层组件查找。
* 直到查询模块里面的providers配置。
* 如果没有找到服务，则抛出异常。  
所以需要特别注意：  
* 如果在组件里引用了Service，那么就是创创建了一个新的单独的Service单例。
* 如果你在多个模块(@NgModule)里面同时定义providers，那也不是单例。
* 如果在异步加载的模块里面定义Service，那也不是全局单例，因为Angular会为异步模块创建独立的Injector空间。  
   
#### 关于Service的基本注意点 ####
需要注意的问题是，我们应该把什么样的东西做成服务？  
* Service应该是无状态的。
* Service应该可以被很多组件复用，不应该和任何组件紧密相关。
* 多个Service可以组合起来，实现更复杂的服务。  
  
在Angular核心包里，最典型的一个服务就是[HTTP服务](https://angular.io/tutorial/toh-pt6)。  
  
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