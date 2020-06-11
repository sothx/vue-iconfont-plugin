# vue-iconfont-plugin

> Vue Iconfont Plugin

## 安装插件

``` bash
npm install --save-dev vue-iconfont-plugin

```

## 在main.js配置 vue-iconfont-plugin
``` javascript
import IconFont from 'vue-iconfont-plugin'
Vue.use(IconFont, {
  prefix:'icon' // prefix
})
```
## 使用组件
``` html
<IconFont name="home" type="unicode"></IconFont>
```
