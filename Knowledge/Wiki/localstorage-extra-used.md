# LocalStorage还能这么用 #
## 前言 ##
## localStorage的基本使用 ##
有两点需要注意：  
* setItem时，可能回答道大小限制，最好加上错误捕捉。
* 在存储容量快满时，会造成getItem性能急剧下降。
  
```javascript
try {
    localStorage.setItem(key, value);
} catch(e) {
    if(isQuotaExceeded(e)) {
        // Storage full, maybe notify user or do some clean-up
    }
}

function isQuotaExceeded(e) {
    var quotaExceeded = false;
    if (e) {
        if (e.code) {
            switch (e.code) {
                case 22:
                    quotaExceeded = true;
                    break;
                case 1014:
                    // Firefox
                    if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                        quotaExceeded = true;    
                    }
                    break;
            }
        } else if (e.number === -2147024882) {
            // Internet Explorer 8
            quotaExceeded = true;
        }
    }
    return quotaExceeded;
}
```  
  
## 缓存静态文件 ##

## 使用Loader加载静态文件 ##
由于请求都是动态发出的，所以可以对请求拦截处理。大致流程如下：  
* 
* 请求远程文件
* 缓存最新文件内容
* 执行文件内容
这个方式有个开源库：`basket.js`。  
  
## 借助服务器将静态文件inline化 ##
## 同源窗口通信 ##
## 作为前端DB的存储介质 ##
可能不满足于用**键值对**保存数据，还想保存更复杂的数据结构。  
* 灵活存取`json`格式的数据：`typicode/lowdb`
* 通过sql对数据CURD(Create, Update, Retrieve, Delete)操作：`agershun/alasql`

## 表单自动持久化 ##
将数据变更实时保存在localStorage可以避免误关闭导致的数据丢失。  
  
## 总结 ##
文件缓存有更好的解决方案，就是Service Worker的CacheStorage。