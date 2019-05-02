# 为什么 HTTPS 比 HTTP 更安全? #
转自：浪里行舟
## 前言 ##
在浏览器，搜索引擎，CA机构，大型互联网的共同促进下，互联网迎来HTTPS加密时代，将会在未来几年全面取代HTTP成为传输协议的主流。  
  
## 什么是HTTPS ##
HTTPS是HTTP建立SSL(Secure Sockets Layer)加密层，并对传输数据进行加密，是HTTP协议的安全版。  
HTTPS主要作用是：  
* 对数据进行加密，并建立一个信息安全通道，来保证传输过程中的数据安全。
* 对网站服务器进行真实身份认证。  
  
当浏览器访问HTTPS通信有效的Web网站时，浏览器的地址栏内会出现一个带锁的标记。  
![https-logo](https://mmbiz.qpic.cn/mmbiz_png/zewrLkrYfsNPHHenibanG6wMyYBnOyCo7dicIujcArWCdN2aibWaJ6aibWmDRpHhW16A60NiawCjWKpd0s2HXP4lsXw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1 "https-logo")  
  
## 为什么需要HTTPS ##
* HTTP报文使用明文（指未经过加密的报文）方式发送，
* HTTP明文协议的缺陷是导致数据泄漏、数据篡改、流量劫持、钓鱼攻击等安全问题的重要原因。
* HTTP无法确认，发出的请求/相应和接收到的请求/相应前后相同。  
  
HTTP协议中的请求和相应不会对通信方进行确认。任何人都可以发出请求，服务器只要收到请求，都会给一个响应。  
  
HTTP协议无法验证通信方身份，任何人都可已伪造虚假服务器欺骗用户，实现“钓鱼欺诈”，用户无法擦觉。  
  
HTTPS比HTTP协议相比多了以下优势：  
* 数据隐私性：内容经过对称加密，每个链接生成一个唯一的加密密钥
* 数据完整性：内容传输经过完整性校验
* 身份认证：第三方无法伪造服务端（客户端）身份
  
## HTTPS如何解决HTTP上述问题? ##
HTTPS并非应用层的一种新协议，只是HTTP通信接口部分用SSL和TLS(Transport Layer Security)协议代替而已。  
通常HTTP直接和TCP(Transmission Control Protocol)通信。当使用SSL时，则演变成首先和SSL通信，再由SSL和TCP通信。所谓HTTPS，**就是身披SSL协议这层外壳的HTTP**。  
![https-image](https://user-gold-cdn.xitu.io/2018/12/22/167d48235fa5fb22?imageView2/0/w/1280/h/960/format/webp/ignore-error/1 "https-image")  
  
HTTP加上加密处理和认证以及完整性保护后即是HTTPS。  
![https-image-2](https://user-gold-cdn.xitu.io/2018/12/22/167d4860c0ede033?imageView2/0/w/1280/h/960/format/webp/ignore-error/1 "https-image-2")  
  
HTTPS协议的主要功能都是依赖于SSL/TSL协议，SSL/TSL的功能实现主要依赖于三类基本算法：**散列函数**，**对称加密**，**非对称加密**：  
* 利用非对称加密实现身份认证和密钥协商
* 对称加密采用协商的密钥对数据加密
* 散列函数验证信息的完整性  
  
![cypto](https://user-gold-cdn.xitu.io/2018/12/22/167d48bc77ee69f8?imageView2/0/w/1280/h/960/format/webp/ignore-error/1 "cypto")  
  
#### 1.解决内容可能被窃听的问题——加密 ####
  
方法1 —— 对称加密：  
  
这种方式加密和解密用同一个密钥。  
因为不能让第三方知道密钥，所以还得设法安全的保管接收到的密钥。  
  
方法2 —— 非对称加密：  
  
使用一对非对称的密钥。一把叫私有密钥，一把叫公开密钥。顾名思义：**私有密钥不能让任何人知道，公开密钥则可以随意发布，任何人都可以获得**。  
  
使用这种方式，发送密文的一方使用对方的公开密钥进行加密处理，对方收到被加密的信息后，再使用自己的私有密钥解密。  
![Asyncmetric](https://mmbiz.qpic.cn/mmbiz_png/zewrLkrYfsNPHHenibanG6wMyYBnOyCo7zm45oianAGL4oP7tM3d6Q2icAicpYFcLYIgxU9ZTa7PUDI64p9BDPR2eA/640 "Asyncmetric")  
  
这种加密的特点是信息传输一对多，服务器只需要维持一个私钥就可以和多个客户端进行加密通信。  
不过有以下缺点：  
* 公钥是公开的，所以针对私钥加密的信息，黑客截获后可以使用公钥进行解密，获取其中的内容。
* 公钥并不包含服务器信息，使用非堆成加密算法无法确保服务器身份的合法性，存在中间人攻击的风险，服务器发送给客户端的公钥可能在传送过程中被中间人截获并篡改。
* 在数据加解密的过程中需要消耗一定时间。  
  
方法3 —— 对称加密 + 非对称加密（HTTPS采用这种方式）  
使用对称密钥的好处是解密的效率比较快，非对称密钥的好处是传输的内容不能被破解。如果结合在一起：**在交换密钥环节使用非对称加密方式，之后的建立通信交换报文阶段则使用非对称加密方式**。  
具体的做法是：发送密文的一方使用对方的公钥加密处理“对称的密钥”，然后对方用自己的私钥解密拿到“对称的密钥”，这样可以确保交换的密钥是安全的前提下，使用对称加密方式进行通信。  
  
#### 2.解决报文可能遭篡改问题——数字签名 ####
网络传输过程中需要经过很多中间节点，虽然数据无法被解密，但可能被篡改。  
  
数字签名有两种功效：  
* 能确定消息确实是由发送方签名并发送过来的，因为别人假冒不了发送方的签名。
* 数字签名能确定消息的完整性，证明数据没有被篡改过。  
  
数字签名如何生成：  
![generate-digital-certificate](https://user-gold-cdn.xitu.io/2019/4/22/16a45a0b0d78df15?imageView2/0/w/1280/h/960/format/webp/ignore-error/1 "generate-digital-certificate")  
  
将**文本**先用Hash函数生成消息摘要，然后用发送者的私钥加密生成数字签名，与原文一起传送给接收者。  
  
校验数字签名：  
![validate-digital-certificate](https://user-gold-cdn.xitu.io/2019/4/22/16a45a3705e4abda?imageView2/0/w/1280/h/960/format/webp/ignore-error/1 "validate-digital-certificate")  
  
接收者用发送者的公钥解密被加密的摘要信息，然后用hash函数产生一个摘要信息，然后进行对比。如果相同，则信息完整，如果不同，则信息被篡改过。  
  
可是问题是，如何证明我们拿到的公钥是来自正确的人？这时候就要引入证书颁发机构（Certificate Authority）。

#### 3.解决通信方身份可能被伪装的问题——数字证书 ####
数字证书认证机构处于客户端和服务器双方都可信赖的第三方机构的立场上。  
![digital-certificate](https://user-gold-cdn.xitu.io/2018/12/23/167d94712a5ceb0e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1 "digital-certificate")  
  
以下为数字证书认证机构的业务流程：  
* 服务器的运营人员向第三方机构CA提交公钥，组织信息，个人信息等信息并申请认证
* CA通过线上，线下等多种手段验证申请者提供信息的真实性，如组织是否存在，企业是否合法，是否拥有域名的所有权等
* 如果审核信息通过，CA会向申请者签发证书，其中包含：申请者公钥，申请者的组织信息和个人信息，签发机构CA的信息，有效时间，证书序列号等信息的明文，同时包含一个签名。其中签名的产生算法：首先，使用散列函数计算公开的明文信息的信息摘要，然后采用CA的私钥对信息摘要进行加密，密文即签名
*
*
*
*
  
## HTTPS工作流程 ##
![https-workflow](https://user-gold-cdn.xitu.io/2019/4/22/16a45839ceacbb52?imageView2/0/w/1280/h/960/format/webp/ignore-error/1 "https-workflow")  
  
流程如下：  
1. Client发起一个HTTPS的请求，根据RFC2818的规定，Client知道需要连接Server的443（默认）端口。
2. Server把事先配置好的公钥证书(public key certificate)返回给客户端。
3. Client验证证书，比如是否在有效期内，
4. Client使用伪随机数生成器生成加密所使用的对称密钥，然后用证书的公钥加密这个对称密钥，发给Server。
5. Server会用自己的私钥揭秘这个消息，得到对称密钥。至此，Client和Server双方都持有了相同的对称密钥。
6. Server使用对称密钥加密“明文内容a”，发送给Client。
7. Client解谜得到内容。
8. Client再次发起HTTPS的请求，使用密钥加密的请求“明文内容b”，然后Server使用对称密钥解密密文。

## HTTP 与 HTTPS 的区别 ##
HTTP是明文传输协议，HTTPS是SSL+HTTP协议构建的可进行加密传输，身份认证的网络协议。  
![http-https](https://mmbiz.qpic.cn/mmbiz_png/zewrLkrYfsNPHHenibanG6wMyYBnOyCo7e7UB4WVI1Hiag11DnNslCnlGv2jTgg0SqXwZ1I3haJO8PMXAIc8rnPg/640 "http-https")  
  
详细如：  
* HTTPS对搜索引擎更友好，利于SEO
* HTTPS需要用到SSL证书，而HTTP不用
* HTTPS标准端口443，HTTP标准端口80
* HTTPS基于传输层，HTTP基于应用层
* HTTPS在浏览器显示绿色安全锁，HTTP没有显示
  
## 为何不所有的网站都使用HTTPS ##
首先，HTTPS实施有门槛，需要权威CA颁发的SSL证书。从证书的选择，购买到部署，都会比较耗时耗力。  
其次，HTTPS性能消耗要大于HTTP，与纯文本通信相比，加密通信会消耗更多的CPU及内容资源。不过，用户可以通过性能优化，把证书部署到SLB(Server Load Balancer)或者CDN(Content delivery network)，来解决这个问题。  
最后，安全意识是大家一起推动的。
