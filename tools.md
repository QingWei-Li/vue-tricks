# Vue.js 实用技巧：工具

在使用 Vue2 的过程中，我看到或想到一些有趣的工具和技巧，这些东西对我确实很有帮助，下面与大家分享其中一部分。

## vue build

`vue-cli` 是官方推出的一款 Vue 脚手架工具，可以很方便的创建简单或者完整开发环境的 Vue 项目。最近它加入一个新功能 —— `vue build`。

类似于 React 的 [next.js](https://github.com/zeit/next.js) 但又不完全等同。它的功能是可以让你不用任何配置，只写一个 `*.vue` 文件就可以通过 `vue build` 命令启动。非常适合于只想写一点 Vue 的 demo 或者小型项目的用户使用。如果你已经安装了 `vue-cli` 并更新到 `2.8.0` 那你现在就可以开始体验！

创建一个 `app.vue` 文件并随便写一点内容：

```html
<template>
  <h1>
    Hello <span>Vue.js</span>
  </h1>
</template>

<style>
  h1 {
    font-family: 'Helvetica Neue';
    color: #2c3e50;
    text-align: center;
    margin-top: 30vh;
  }

  span {
    color: #42b983;
  }
</style>
```

在终端里输入 `vue build app.vue` 并打开 http://localhost:4000 就可以预览到结果了。

```bash
vue build app.vue

> WAIT  Compiling...
> DONE  Compiled successfully in 110ms

> Open http://localhost:4000
```

当然如果你想自定义配置也是支持的，具体内容可以参考 [vue build 文档](https://github.com/vuejs/vue-cli/blob/master/docs/build.md)。

## vue-loader

vue-loader 是处理 `*.vue` 文件的 webpack loader。它本身提供了丰富的 API，有些 API 很实用但很少看到有人用。例如接下来要介绍的 `preserveWhitespace` 和 `transformToRequire`。

### preserveWhitespace 减少你的 bundle 大小

有些时候我们在写模板时不想让元素和元素之间有空格，可能会写成这样：

```html
<ul>
  <li>1111</li><li>2222</li><li>333</li>
</ul>
```

当然还有其他方式，总之目的就是为了去掉元素间的空格。其实我们完全可以通过配置 `vue-loader` 实现这一需求。

```js
vue: {
  preserveWhitespace: false
}
```

以后在写模板时就不会再有多余的空格了。同时最终的 bundle 体积也会减少不少。元素间的空格在 vue 编译后是 `_v(" ")`，如果内容多的话其实还是会占一定体积的。在 Element 里加入这个配置后，打包出来的内容未压缩状态下少了近 30Kb。

### transformToRequire 再也不用把图片写成变量了

以前在写 Vue 的时候经常会写到这样的代码。把图片提前 require 传给一个变量再传给组件。

```html
<template>
  <div>
    <avatar :default-src="DEFAULT_AVATAR"></avatar>
  </div>
</template>

<script>
  export default {
    created () {
      this.DEFAULT_AVATAR = require('./assets/default-avatar.png')
    }
  }
</script>
```

其实通过配置 `transformToRequire` 就可以让我们像给 `img` 传图片一样方便。

```js
vue: {
  transformToRequire: {
    'avatar': ['default-src']
  }
}
```

于是我们代码就可以简化不少：

```html
<template>
  <div>
    <avatar default-src="./assets/default-avatar.png"></avatar>
  </div>
</template>
```

`vue-loader` 还有很多实用的 API 例如最近加入的 [Custom Blocks](http://vue-loader.vuejs.org/en/configurations/custom-blocks.html)，各位可以去文档里找找看。



## 参考链接

- https://github.com/vuejs/vue-cli/
- http://vue-loader.vuejs.org/en/
- https://github.com/QingWei-Li/vue-tricks