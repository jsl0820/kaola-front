## 边学边做仿kaola-demo
### 目前的技术栈 update 2017-05-09
- react + react-route
## 版本
```
 react: ^15.4.2
```

```
 react-dom: ^15.4.2
```

```
 react-router: ^4.1.1
``` 
## 约定

* 目录 命名用小写  类似 "nav-bar" 的形式
* 文件 命名用驼峰  类似 "NavBar.jsx"的形式

## 学习小笔记
### 2017-05-09
> react-route  版本为 V4+ 没有注意 api 的改变

### 2017-05-10
> 修改了部分有状态组件为无状态组件(因为之前不知道之间的区别)

1. 有状态组件：有生命周期，state。
2. 无状态组件：无生命周期，无state，组件是一个纯jsx类或者对象。

>理解无状态组件的属性

组件：`<Hello name="jsl0820">`

获取name：`const Hello = (props) =>(<div>{props.name}</div> )`

>文件格式修改为.jsx

* sublime需要安装babel插件


## 更改记录
### 2017-05-10
 > 修改目录结构
 	
	|-src
	  |-components 组件库
		|-banners
			|-Banners.js
			|-style.css
		|-...
	  |-oages 页面
		|-Home.js
		|-...
	  |-App.js
	  |-index.js 
	
	



