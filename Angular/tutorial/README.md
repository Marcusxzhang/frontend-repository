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
将组件按照一定的规则进行相互通讯，才能构成一个有机的完整系统。组件之间有父子关系，兄弟关系和没有直接关系。相对应的，组件之间有以下几种典型的通讯方式：  
* 直接的父子关系，父组件直接访问子组件的public属性和方法。
* 直接的父子关系，借助@Input和@Output进行通讯。
* 没有直接关系，借助Service单例进行通讯。
* 利用cookie或者localstorage进行通讯
* 利用Session进行通讯  
无论什么前端框架，组件之间的通讯都离不开以上几种方案。  
  
本章主要内容：  
* 直接调用
* @Input和@Output
* 利用Service单例进行通讯
* 利用cookie或者localstorage进行通讯
* 利用Session进行通讯  
  
#### 直接调用 ####

```html
<child #child></child>
<button (click)="child.childFn()" class="btn btn-success">Call</button>
```  
显然，子组件必须要暴露一个public型的`childFn`方法以供调用。  
```typescript
public childFn():void {
    console.log("The child name is : " + this.panelTitle);
}
```  
如果要父组件调用子组件的实例，则需要用到`@ViewChild`装饰器。  
```typescript
@ViewChild(ChildComponent) private childComponent: ChildComponent;
```  
很明显，如果父组件直接访问子组件，那么这两个组件的关系就固定死了。相互依赖，谁也离不开谁，也就不能单独使用。**所以除非自己很清楚之间的关系，不然不要在父组件直接访问子组件的属性和方法**。

#### @Input和@Output ####
我们可以利用`@Input`装饰器，让父组件直接给子组件传递参数：  
```typescript
@Input() public panelTitle: string;
```  
父组件上可以这样写：  
```html
<child paneTitle="a new title"></child>
```   
与此同时，`@Output`的本质是事件机制，用来监听子组件上派发的事件。  
```typescript
@Output() public follow = new EventEmitter();
```  
触发follow事件的方式：  
```typescript
this.follow.emit("follow");
```  
父组件上面可以这样写来监听：  
```html
<child (follow)="doSomething()"></child>
```  
  
#### 利用Service单例进行通讯 ####
原理：  
`Component_1`<--(依赖注入)--`Service`--(依赖注入)-->`Component_2`。  
  
如果在根模块（一般是app.module.ts）的providers里面注册了Service，那么这个Service就是全局单例。  
* 比较粗暴的方式： 我们可以在Service里面定义public型的共享变量，然后让不同的组件都来访问这个变量达到共享数据。
* 优雅一点的方式：利用RxJS，在Service里面定义一个public的Subject（主题），然后让所有的组件来Subscribe这个主题。
  
用作主线的代码如下：  
```typescript
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EventBusService {
    public eventBus: Subject = new Subject();
    constructor(){}
}
```  
```typescript
import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../service/event-bus.service';

@Component({
    selector: "child-1",
    templateUrl: "./child-1.component.html",
    styleUrls: ['./child-1.component.scss']
})

export class Child1Component implements OnInit {
    constructor(public eventBusService: EventBusService){}
    ngOnInit(){}
    public triggerEventBus(): void {
        this.eventBusService.eventBus.next("trigger");
    }
}
```  
```typescript
import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../service/event-bus.service';

@Component({
    selector: "child-2",
    templateUrl: "./child-2.component.html",
    styleUrls: ['./child-2.component.scss']
})

export class Child2Component implements OnInit {
    public events: Array = [];
    constructor(public eventBusService: EventBusService){}
    ngOnInit(){
        this.eventBusService.eventBus.subscribe((value)=>{
            this.events.push(value + "-" + new Date());
        })
    }
}
```  

#### 利用cookie或者localstorage进行通讯 ####
原理：  
`Component_1`--(写入)-->`cookie或者localstorage`--(读取)-->`Component_2`。  
  
Component_1：  
```typescript
public writeData(): void {
    window.localStorage.setItem("json", JSON.stringify({name:"a", age: 18}));
}
```  
Component_2：  
```typescript
var json = window.localStorage.getItem("json");
window.localStorage.removeItem("json");
var obj = JSON.parse(json);
console.log(obj.name);
console.log(obj.age);
```  
  
#### 利用Session进行通讯 ####
同样的方法，也可以服务端处理Session请求。
  
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
在Web Component里面，shadowDOM是重要的组成部分。在底层，Angular渲染组件的方式有以下三种：  
* Native： 采用shadowDOM的模式来进行渲染。
* Emulated： 模拟模式。对于不支持shadowDOM模式的浏览器，会用模拟的方法来渲染。**这是Angular默认的渲染模式**。
* None：不采用任何方式。直接把组件的HTML结构和CSS样式插入到DOM流里面。这种方式比较容易造成组件之间出现CSS命名污染的问题。  
  
在定义组件时，可以通过`encapsilation`配置手动指定组件的渲染模式。  
```typescript
@Component({
    selector: 'emulate-mode',
    encapsilation: ViewEncapsulation,Emulated,
    templateUrl: './emulate-mode.component.html',
    styleUrls: ['./emulate-mode.component.scss']
})
```  
  
有以下几个注意点：
* ShadowDOM模式的封装性更好，运行效率也更高。
* 一般不需要自己手动设置组件的渲染模式。  
  
## 内容投影 ##
#### 投影一块内容 ####
有时候开发的时候，希望里面的模块是可变的，而不是直接写死。那么内容投影机制就派上用场了，可以这样编写组件的模版。  
```html
<div class="panel panel-primary">
    <div class="panel-heading">
        <ng-content></ng-content>
    </div>
    <div class="panel-body">Body</div>
    <div class="panel-footer">Footer</div>
</div>
```  
请注意
#### 投影多块内容 ####
#### 投影一个复杂的组件 ####
#### 内容投影这个特性存在的意义是什么 ####
## @ContentChild & @ContentChildren ##

## @ViewChild & @ViewChildren ##
我们可以利用`@ViewChild`这个装饰器来操控直属的子组件。  
```html
<div class="panel panel-primary">
    <div class="panel-heading"></div>
    <div class="panel-body">
        <child-one></child-one>
    </div>
</div>
```  
```typescript
import { Component. OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';

@ViewChild(ChildOneComponent) childOne: ChildOneComponent;

// Call the children component in the cycle of ngAfterViewInit
// ...
ngAfterViewInit(): void {
    console.log(this.childOne);
    // use the function
    this.childOne.helloEvent.subscribe((param) => {
        console.log(this.childOne.title);
    });
}
// ...
```  
```typescript
@Input() public title: string = 'title';
@Output() helloEvent: EventEmitter<string> = new EventEmitter<string>();
public sayHello(): void {
    this.helloEvent.emit('hello');
}
```  
  
  
与此同时，我们也可以使用`@ViewChildren`，来获取一堆子组件。  
```html
<div class="panel panel-primary">
    <div class="panel-heading">Father component</div>
    <div class="panel-body">
        <child-one></child-one>
        <child-one></child-one>
        <child-one></child-one>
        <child-one></child-one>
        <child-one></child-one>
        <child-one></child-one>
    </div>
</div>
```  
```typescript
import { COmponent, OnInit, ViewChild, ViewChildren, QueryList } from `@angular/core`;

@ViewChildren(ChildOneComponent) children: QueryList<ChildOneComponent>;

// Call the children component in the cycle of ngAfterViewInit
// ...
ngAfterViewInit(): void {
    this.children.forEach((item) => {
        item.helloEvent.subscribe((data) => {
            console.log(data);
        });
    })
}
// ...
```  
  
## 与Polymer封装组建的方式简单对比 ##
## 封装并发布组件库 ##
## 指令简介 ##
根据Angular官方文档的描述，Angular有三种类型的指令：  
* Component是Directive的子接口，是一种特殊的指令。Component可以带HTML模版，Directive不能。
* 属性型指令：用来修改DOM元素的外观和行为，但不会改变DOM结构。如果打算封装自己的组件库，属性型指令是必备内容。
* 结构型指令：可以修改DOM结构。  
  
那么既然有了组件，为什么还要指令？  
根本原因是：**我们需要用指令来增强标签的功能，包括HTML原生标签和自己定义的标签**。  
有了指令之后，我们就可以随自己喜好给标签扩展无限可能。  
  
## 自定义指令 ##
强烈建议仔细阅读官方文档的Directive[细节描述](https://angular.cn/guide/attribute-directives)。  
  
#### 官方指令 ####
```typescript
import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[my-high-light]'
})

export class MyHighLightDirective {
    @Input() highlightColor: string;

    constructor(
        private el: ElementRef
    ) {}

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
```  
核心代码为：  
```html
<p my-high-light highlightColor="#ff3300">Text</p>
```
  
#### 自定义结构型指令 ####
```typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appDelay]'
})

export class DelayDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef
    ) {}

    @Input() set appDelay(time: number) {
        setTimeout(() => {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }, time);
    }
}
```  
指令的用法核心代码：  
```html
<div>
    <card *appDelay="500 * item">
        number {{item}} card
    </card>
</div>
```  
  
值得注意的是，就算是自己定的指令，前面也会加星号。  
  
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
Angular中关于Observable和RxJS的[资料](https://angular.cn/guide/observables)。  
  
#### 回调地狱和Promise ####
在以前的AJAX的调用过程中，在实际场景里，因为我们需要拿很多数据。所以我们经常会AJAX里面嵌套很多个AJAX，这样就会导致可读性差，时间长了根本无法维护。  
而Promise的产生，主要就是为了解决这个问题：  
```typescript
new Promise(function(resolve, reject) {
    // use resolve to return the data
})
.then(function(data) {
    // some code
})
.then(function(data) {
    // some code
})
.catch(function(reason) {

});
```  
  
#### RxJS与Promise的共同点 ####
RxJS与Promise的共同点：  
```typescript
let promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('promise timeout');
    }, 2000);
});
promise.then(value => console.log(value));
```  
```typescript
let stream$ = new Observable(observer => {
    let timeout = setTimeout(() => {
        observer.next('observer timeout');
    }, 2000);
    return () => {
        clearTimeout(timeout);
    }
});
let disposable = stream1$.subscribe(value => console.log(value));
```  
所以我们可以发现，RxJS和Promise的用法非常相似。Promise使用的是then()和resolve()，而RxJS用的是next()和subscribe()。  
  
#### RxJS与Promise的三大重要不同点 ####
不同点：
* 是否可以中途取消： RxJS(是) Promise(否)
* 是否可以发射多个值： RxJS(是) Promise(否)
* 是否有各种工具函数： RxJS(是) Promise(否)  
  
以下为实例代码：  
1  
```typescript
let promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('promise timeout.');
    }, 2000);
});
promise.then(value => console.log(value));
```  
```typescript
let stream1$ = new Observable(observer => {
    let timeout = setTimeout(() => {
        observer.next('observer timeout');
    }, 2000);
    return () => {
        clearTimeout(timeout);
    }
});
let disposable = stream1$.subscribe(value => console.log(value));
setTimeout(() => {
    disposable.unsubscribe();
}, 1000);
```  
在上面的代码我们可以看到，Promise是不能撤回的。而在RxJS的世界里，是可以unsubscibe()方法来中途撤回，同时订阅者为0的时候，RxJS就不会触发。  
  
2  
```typescript
let stream2$ = new Observable<number>(observer => {
    let count = 0;
    let interval = setInterval(() => {
        observer.next(count++);
    }, 1000);
    return () => {
        clearInterval(interval);
    }
});
stream2$.subscribe(value => console.log("Observable" + value));
```  
在上面的代码我们可以看到，我们用`setInterval`每隔一秒钟触发一个新的值，源源不断。Promise是做不到的，因为最终结果要么是`resolve`和`reject`。  
    
3  
```typescript
let stream2$ = new Observable<number>(observer => {
    let count = 0;
    let interval = setInterval(() => {
        observer.next(count++);
    }, 1000);
    return () => {
        clearInterval(interval);
    }
});
stream2$.pipe(
    filter(val => val % 2 == 0)
).subscribe(value => console.log("filter>" + value));
stream2$.pipe(
    filter(value => value * value)
).subscribe(value => console.log("map>" + value));
```  
在上面代码，我们用到两个工具函数： filter和map。  
* filter的作用就是进行过滤。
* map的作用就是对集合进行遍历。
  
#### 经典例子1： HTTP服务 ####
```typescript
this.http.get(url, { search: params }).pipe(
    map((res: Response) => {
        let result = res.json();
        console.log(result);
        return result;
    }),
    catchError((error: any) => Observable.throw(error || 'Server error'))
);
```
  
#### 经典例子2： 事件处理 ####
```typescript
this.searchTextStream.pipe(
    debounceTime(500),
    distinctUntilChanged()
).subscribe(searchText => {
    console.log(this.searchText);
    this.loadData(this.searchText);
});
```  
  
## 国际化 ##
## 自动化测试 ##
## 注射器树基础知识 ##
## Angular依赖注入的基本玩法 ##
Angular的依赖注入机制十分强大，此章介绍三种最典型的场景：  
* 全局单例模式的Service。
* 多实例模式的Service。
* 异步模块上的Service。  
  
#### 全局单例模式 #####
假设我们有一个UserListComponent，会利用UserListService来加载数据。  
在**UserListComponent**的构造函数里声明UserListService：  
```typescript
import { Component, OnInit } from '@angular/core';
import { UserListService } from './service/user-list.service';

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
    public userList: Array<any>;

    constructor(
        public userListService: UserListService
    ) {
        console.log(this.userListService);
    }

    ngOnInit() {
        this.userList = this.userListService.getUserList();
    }
}
```  
编写UserListService的具体实现：  
```typescript
import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Injectable()
export class UserListService {
    private _id: string;

    constructor() {
        this._id = UUID.UUID();
    }

    public getUserList():Array<any> {
        return [
            {userName: 'marcus', age: 18},
            {userName: 'marcus', age: 18},
            {userName: 'marcus', age: 18}
        ];
    }

    public getId(): string {
        return this._id;
    }
}
```  
最后在根模块AppModule的providers里面定义UserListService。  
  
#### 多实例模式 #####
如果在每个组件里面都配置了一个providers，那就不是单例模式了。每个组件都有独立的实例。  
  
#### 异步模块 #####
以上都是同步模块，如果对于懒加载进来的异步模块，里面的providers只对本模块的成员可见。如果在其他模块里面引用异步模块里面配置的provider，会发生异常。  
  
#### 小结 ####
Angular依赖注入的运行规则是：
* 如果组件内部配置了providers，优先使用。
* 否则向父层组件查找。
* 一直查询到根模块AppModule里面的providers配置。
* 如果没找到，就抛异常。
* 同步模块配置的providers是全局可见的。
* 异步模块配置的providers只对本模块的成员可见，Angular会为异步加载的模块创建独立的注射器。
* 注射器的生命周期和组件的生命周期相同。
  
## @Injectable & @Inject ##
#### @Injectable —— 自动挡 ####
在真实的应用中，我们常常需要去服务器中加载数据。这时候就要用到Angular的HttpClient服务了，所以通过上章内容，我们将HttpClient服务注射到UserListService服务里面去，代码如下：  
```typescript
import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserListService {
    private _id: string;

    constructor(
        private hc: HttpClient
    ) {
        this._id = UUID.UUID();
    }

    public getUserList(): Observable<Array<any>> {
        return Observable.empty();
    }

    public getId(): string {
        return this._id;
    }
}
```  
然后在`app.module`里面import HttpClientModule。  
  
其原理就是：如果一个Service里面需要依赖其他Service，则需要使用@Injectable装饰器进行装饰。所以为了不麻烦，最好所有的Service里面都加上@Injectable装饰器。  
  
#### @Inject —— 手动挡 ####
如果需要走@Inject的方法，则代码要改成：  
```typescript
// ...
constructor(
    @Inject(HttpClient) private hc
) {
    this._id = UUID.UUID();
}
// ...
```  
可是通过编译得到，@Inject其实比@Injectable产生更多的代码，最后编译出来的文件体积会变大。  
  
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