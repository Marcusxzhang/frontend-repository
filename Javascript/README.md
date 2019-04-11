# JavaScript 高级程序设计 （简化浓缩版） #
## 序 ##
所有内容提炼自Javascript 高级程序设计第三版中文版 (Professional JavaScript for Web Developer 3rd edition)。一些专业名词我会参照英文版来重新设定。  
作为学习材料，我更希望我一遍梳洗下来之后，用简单的一句话或者提炼出自认为精华句子写下来方便以后的查阅。如果需要更为详细的解读，需要翻阅原书。  
里面的所有测试代码都会进行包装处理，并以[leetcode](https://leetcode.com/playground/new/empty)作为测试平台。
## Chapter 1 : JavaScript简介 ##
#### JavaScript简史 ####
#### JavaScript实现 ####
#### JavaScript版本 ####
#### 小结 ####
## Chapter 2 : 在HTML里面使用JavaScript ##
为Web增加统一的脚本支持，也就是将JavaScript与HTML共存。
#### script元素 ####
在HTML中加入`<script>`元素，在这个tag里面有6个属性：   
* async: 可选。
* charset: 可选。src属性指定的代码的字符集。不过很少用。
* defer: 可选。脚本可以延迟到文档完全被解析之后再执行，只对外部脚本文件有效。
* language: （已废弃）
* src: 可选。要执行代码的外部文件。
* type: 可选。一般默认使用text/javascript  
  
**标签的位置**  
按照惯例，所有`<script>`元素都应该放在`<head>`中。  
但是这样的话就会产生先加载了脚本之后，再呈现内容，如果是重加载脚本的页面就会出现明显的延迟。  
所以现代Web应用程序都将全部JavaScript文件放在`<body>`元素中内容后面。  
  
**延迟脚本**  
脚本会延迟到整个页面解析完毕后再运行。  
按照规范要求，延迟脚本会按照顺序执行，且会先于DOMContentLoaded事件执行。但在现实中，却不一定按照顺序执行，所以最好只包含一个延迟脚本。
但是按照规范，要解析到`</html>`之后才执行延迟脚本，所以最好还是将延迟脚本放在页面底部。  
  
**异步脚本**  
与defer不同的是，标记为async的脚本不保证按照先后顺序执行。所以使用这个属性之前，要确定脚本之间互不依赖。  
然后，因为async的目的是不让页面等待脚本下载与执行，从而异步加载其他内容。所以建议异步脚本不要在加载期间修改DOM。  
  
**延迟脚本**  
脚本会延迟到整个页面解析完毕后再运行。  
按照规范要求，延迟脚本会按照顺序执行，且会先于DOMContentLoaded事件执行。但在现实中，却不一定按照顺序执行，所以最好只包含一个延迟脚本。  
但是按照规范，要解析到`</html>`之后才执行延迟脚本，所以最好还是将延迟脚本放在页面底部。  
  
**异步脚本**  
与defer不同的是，标记为async的脚本不保证按照先后顺序执行。所以使用这个属性之前，要确定脚本之间互不依赖。  
然后，因为async的目的是不让页面等待脚本下载与执行，从而异步加载其他内容。所以建议异步脚本不要在加载期间修改DOM。  
  
**在XHTML中的用法**  
XHTML(Extensible HyperText Markup Language)。  
若要在XHTML中使用JavaScript代码块，type要设定为`application/xhtml+xml`。且在嵌入代码加入`<![CDATA[ code here ]]>`。  
#### 嵌入代码与外部文件 ####
虽然嵌入代码或者引入外部文件都可以，但还是因为以下优点，比较推荐引用外部文件：  
* 可维护性： 可以集中精神维护JavaScript文件。
* 可缓存： 浏览器可以缓存所有外部的JavaScript文件。
* 适应未来： HTML与XHTML包含外部文件的与法相同。
#### 文档模式 ####
详细的解释请参考[Doctype](https://www.w3schools.com/tags/tag_doctype.asp)  
代码请参考[document-modes.html](https://github.com/Marcusxzhang/frontend-repository/blob/master/Javascript/chapter-2/document-modes.html)。
#### noscript元素 ####
为了让不支持JavaScript的浏览器平稳的退化，创造了`<noscript>`元素。而`<noscript>`只有在下列情况在会出现：  
* 浏览器不支持脚本。
* 浏览器支持脚本，但是功能被禁用。
## Chapter 3 : 基本概念 ##
#### 语法 ####
#### 关键词与保留字 ####
#### 变量 ####
#### 数据类型 ####
#### 操作符 ####
#### 语句 ####
#### 函数 ####
#### 小结 ####
## Chapter 4 : 变量 作用域和内存问题 ##
#### 基础类型和引用类型的值 ####
#### 执行环境及作用域 ####
#### 垃圾收集 ####
#### 小结 ####
## Chapter 5 : 引用类型 ##
#### Object类型 ####
#### Array类型 ####
#### Date类型 ####
#### RegExp类型 ####
#### Function类型 ####
#### 基本包装类型 ####
#### 单体内置对象 ####
#### 小结 ####
## Chapter 6 : 面向对象的程序设计 ##
#### 理解对象 ####
#### 创建对象 ####
#### 继承 ####
#### 小结 ####
## Chapter 7 : 函数表达式 ##
#### 递归 ####
#### 闭包 ####
#### 模仿块级作用域 ####
#### 私有变量 ####
#### 小结 ####
## Chapter 8 : BOM ##
#### window对象 ####
#### location对象 ####
#### navigator对象 ####
#### screen对象 ####
#### history对象 ####
#### 小结 ####
## Chapter 9 : 客户端检测 ##
#### 能力检测 ####
#### 怪癖检测 ####
#### 用户代理检测 ####
#### 小结 ####
## Chapter 10 : DOM ##
DOM(Document Object Model)是针对HTML和XML的一个API。  
值得注意的是，IE8之前的所有DOM都是COM。这意味着要特殊处理。
#### 节点层次 ####
总共有12种节点类型，都继承自一个基类型(base type)。  
  
**Node类型**  

  
**Document类型**  
  
**Element类型**  
Element提供了对元素标签名，子节点及特性的访问。具有以下特征：  
* nodeType的值为1
* nodeName的值为元素的标签名
* nodeValue的值为null
* parentNode可能是Document或Element
* child nodes可能是Element, Text, Comment, ProcessingInstruction, CDATASection或者EntityReference  
  
可以使用`nodeName`或者`tagName`来返回标签名。代码如[element-getTagName.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Javascript/chapter-10/element-getTagName.js)  
  
1. HTML元素  
所有HTML元素都由HTMLElement类型表示，拥有下课标准特性：  
* id: 元素的唯一标识符。
* title: 附加说明信息，一般通过工具显示条显示出来。
* lang: 语言代码，很少使用，一般用于Web Content Accessibility Guidelines。
* dir: 语言的方向，ltr或者rtl，很少使用。
* className: 与元素的class特性对应。  
代码如[element-htmlexamples.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Javascript/chapter-10/element-htmlexamples.js)  
  
2. 取得特性  
每个元素都有一个或者多个特性，操作特性的方法主要有三个：`getAttribute()`, `setAttribute()`, `removeAttribute()`。  
根据HTML5的规范，自定义特性应该加上`data-*`前缀以便验证。不过值得注意的是，只有非自定义的属性才会以属性的形式添加到DOM对象。代码如[element-attribute-examples.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Javascript/chapter-10/element-attribute-examples.js)  
  
3. 设置特性  
使用的方法是`setAttribute()`，这个方法接受两个参数：要设置的特性名和值。如`setAttribute("id", "someOtherId")`。该方法可以用来设定自定义特性。  
若要移除特性值，可以使用`removeAttribute()`。  
  
4. attributes属性   
Element类型是唯一一个DOM节点类型可以使用attributes属性。   
NamedNodeMap对象拥有下列方法：  
* getNamedItem(name): 返回nodeName属性等于name的节点。
* removeNamedItem(name): 从列表中移除nodeName等于name的节点。
* setNamedItem(node): 从列表中添加节点，以nodeName属性为索引。
* item(pos): 返回位于数字pos位置的节点。  
  
nodeName就是特性的名称，nodeValue就是特性的值。详细代码请参照[element-attributes-namedNodeMap.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Javascript/chapter-10/element-attributes-namedNodeMap.js)。  

但由于直接操作attributes属性不太方便。所以还是会使用`getAttribute()`, `removeAttribute()`和`setAttribute()`。 但如果想要做到遍历的话，attributes还是可以用的。值得注意的是，因为要兼容到ie7，所以我们要使用specified，这个值是用来判断是否设定了特性。代码请参考[element-attributes-grom.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Javascript/chapter-10/element-attributes-grom.js)  
  
5. 创造元素  
使用`document.createElement()`方法可以创建新元素，参数为标签名。但是这个行为只是单纯的创造，并没有添加到HTML中去，所以要运用`appendChild()`, `insertBefore()`, `replaceChild()`来添加到HTML中。例如，`document.body.appendChild(div)`。  
  
6. 元素的子节点  
元素的childNodes属性包含了它的所有子节点。但是因为其他浏览器(除ie以外)，会将空白符计算在内。所以如果要遍历子节点，最好先检查一下`nodeType`属性。代码如[element-attribute-checkNodeType.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Javascript/chapter-10/element-attribute-checkNodeType.js)。  
同时也可以使用`getElementByTagName()`来返回直接子元素。  
  
**Text类型**  
  
**Comment类型**  
  
**CDATASection类型**  
  
**DocumentType类型**  
  
**DocumentFragment类型**  
  
**Attr类型**  
  
#### DOM操作技术 ####
**动态脚本**  
  
**动态样式**  
  
**操作表格**  
  
**使用NodeList**  
  
#### 小结 ####
## Chapter 11 : DOM拓展 ##
#### 选择符API ####
#### 元素遍历 ####
#### HTML5 ####
#### 专有拓展 ####
#### 小结 ####
## Chapter 12 : DOM2和DOM3 ##
#### DOM变化 ####
#### 样式 ####
#### 遍历 ####
#### 范围 ####
#### 小结 ####
## Chapter 13 : 事件 ##
#### 事件流 ####
#### 事件处理程序 ####
#### 事件对象 ####
#### 事件类型 ####
#### 内存和性能 ####
#### 模拟事件 ####
#### 小结 ####
## Chapter 14 : 表单脚本 ##
#### 表单的基础知识 ####
#### 文本框脚本 ####
#### 选择框脚本 ####
#### 表单序列化 ####
#### 富文本编辑 ####
#### 小结 ####
## Chapter 15 : 使用canvas绘图 ##
#### 基本用法 ####
#### D上下文 ####
#### WebGL ####
#### 小结 ####
## Chapter 16 : HTML5脚本编程 ##
#### 跨文档消息传递 ####
#### 原生拖放 ####
#### 媒体元素 ####
#### 历史状态管理 ####
#### 小结 ####
## Chapter 17 : 错误处理与调试 ##
#### 浏览器报告的错误 ####
#### 错误处理 ####
#### 调试技术 ####
#### 常见的IE错误 ####
#### 小结 ####
## Chapter 18 : Javascript与XML ##
#### 浏览器对XML DOM的支持 ####
#### 浏览器对XPATH的支持 ####
#### 浏览器对XSLT的支持 ####
#### 小结 ####
## Chapter 19 : E4X ##
#### E4X的类型 ####
#### 一般用法 ####
#### 其他变化 ####
#### 全面启用E4X ####
#### 小结 ####
## Chapter 20 : JSON ##
JSON, JavaScript Object Notation。它只是一种数据格式，不是一种编程语言。JSON发展于XML之后，发明的原因是因为XML被公认繁琐，亢长。
#### 语法 ####
JSON有三种类型的值：    
* 简单值: 可以使用string, number, boolean和null。但不支持undefined。
* 对象
* 数组: 数组的值可以是任意类型——简单值, 对象或者数组。  
  
JSON不支持变量，函数或对象实例。
**简单值**  
JSON中的string类型必须使用双引号。  
**对象**  
**数组**  
#### 解析与序列化 ####
JSON之所以流行，是因为它可以解析为有用的JavaScript对象。  
JSON对象有两个方法：`stringify()`和`parse()`，分别是把JavaScript对象序列化和将JSON字符串解析成JavaScript值。  
  
**序列化选项**  
`JSON.stringify()`还要接受两个参数。第一个参数是过滤器(数组或者函数)，第二个是一个是否在JSON字符串中保留缩进。
  
**解析选项**  
和`JSON.stringify()`不同，它的替换函数为replacer，而`JSON.parse()`的是还原函数。  
我们可以加入函数到`JSON.parse()`里面，详细代码请参考[json-parse.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Javascript/chapter-20/json-parse.js)。  
  
#### 小结 ####
JSON可以用来表示对象，数组，字符串，数值，布尔值和null。  
同时也可以用`JSON.stringify()`和`JSON.parse()`来序列化和解析。
## Chapter 21 : AJAX与Comet ##
AJAX，Asynchronous JavaScript + XML。其核心是XMLHttpRequest对象。
#### XMLHttpRequest对象 ####
**XHR的用法**  
在使用XHR对象时，要调用的第一个方法是`open()`，他接受三个参数：请求的类型，请求的URL和是否要求异步发送。值得注意的是，这个方法不会发送请求，而是启动一个请求以备发送。需要发送的话，还需要调用`send()`方法。  
如果不需要发送数据，则使用 `xhr.send(null)`便可。相应的数据会自动填充到XHR对象的属性：  
* responseText: 响应主体被返回的文本。
* responseXML: 如果响应内容是text/xml或者application/xml，这个属性会保存XML DOM文档。
* status: 响应的HTTP状态。
* statusText: HTTP状态的说明。  
  
与此同时，我们一般都会用异步的方式来不妨碍JavaScript的运行，那么我们就要检测XHR里的readyState属性，来得知当前活动阶段：  
* 0: 未初始化。尚未调用`open()`。
* 1: 启动。调用了`open()`，未调用`send()`。
* 2: 发送。调用了`send()`，未接收到响应。
* 3: 接受。已经收到了部分数据。
* 4: 完成。完全收到了数据。  
  
每次readyState的属性值变化，都会触发readystatechange时间。  
详细的代码如[xmlhttprequest-start.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Javascript/chapter-21/xmlhttprequest-start.js)  
  
若在请求过程中，想终止请求可以使用`xhr.abort()`。
  
**HTTP头部信息**  
默认情况，发送XHR请求的同时，还会发送下列头部信息：  
* Accept: 浏览器能够处理的内容类型。
* Accept-Charset: 浏览器能显示的字符集。
* Accept-Encoding: 浏览器能处理的压缩编码。
* Accept-Language: 浏览器当前设置的语言。
* Connection: 浏览器和服务器之间连接的类型。
* Cookie: 当前页面设置的任何cookie。
* Host: 发出请求的页面所在的域。
* Referer: 发出请求的页面URL。
* User-Agent: 浏览器的用户代理字符串。  
  
然后使用`setRequestHeader()`来设置头部信息， 接受两个参数：头部字段的名称和头部字段的值。详细的代码如[xmlhttprequest-header.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Javascript/chapter-21/xmlhttprequest-header.js)  
  
与此同时，我们可以使用`getResponseHeader()`来获取响应的内容。
  
**GET请求**  
常用于向服务器查询某些信息，为了请求成功，要求每个参数的名称和值都必须使用encodeURIComponent()进行编码再放在URL的末尾。如`xhr.open("get", "example.php?name1=value1&name2=value2", ture);`。我们可以将这个功能进行函数封装，如[xmlhttprequest-get.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Javascript/chapter-21/xmlhttprequest-get.js)  
  
**POST请求**  
常用于向服务器发送应该被保存的数据。为了让服务器将POST请求和Web表单的请求一视同仁，我们要先将`Content-Type`的头部信息改为`application/x-www-form-urlencoded`，同时也要将发送的数据进行序列化，可以用`serialize()`函数来创建这个字符串。详细的代码如[xmlhttprequest-post.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Javascript/chapter-21/xmlhttprequest-post.js)  
#### XMLHttpRequest 2级 ####
#### 进度事件 ####
#### 跨源资源共享 ####
#### 其他跨域技术 ####
#### 安全 ####
#### 小结 ####
## Chapter 22 : 高级技巧 ##
#### 高级函数 ####
#### 放篡改对象 ####
#### 高级定时器 ####
#### 自定义事件 ####
#### 拖放 ####
#### 小结 ####
## Chapter 23 : 离线应用与客户端储存 ##
#### 离线检测 ####
#### 应用缓存 ####
#### 数据存储 ####
#### 小结 ####
## Chapter 24 : 最佳实践 ##
#### 可维护性 ####
#### 性能 ####
#### 部署 ####
#### 小结 ####
## Chapter 25 : 新型的API ##
#### requestAnimationFrame() ####
#### Page Visibility API ####
#### Geolocation API ####
#### File API ####
#### Web计时 ####
#### Web Workers ####
#### 小结 ####
