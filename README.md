# vue-use
引入开发版本vue.js到自己的项目中
cli命令行安装npm包方式，可同时监测项目及本地静态服务器测试
步骤：
# 全局安装 vue-cli
$ npm install --global vue-cli
# 创建一个基于 webpack 模板的新项目
$ vue init webpack my-project
# 安装依赖，走你
$ cd my-project
$ npm install
$ npm run dev

## 在第二步选择方式如下
zqq@asus MINGW64 ~/desktop
## $ vue init webpack .

? Generate project in current directory? (Y/n)
? Generate project in current directory? Yes

? Project name desktop
? Project description (A Vue.js project)
? Project description A Vue.js project
? Author (july77 <ljlpsy11@gmail.com>)
? Author july77 <ljlpsy11@gmail.com>
? Vue build runtime
? Install vue-router? (Y/n) n
? Install vue-router? No
? Use ESLint to lint your code? (Y/n) n
? Use ESLint to lint your code? No
? Setup unit tests with Karma + Mocha? (Y/n) n
? Setup unit tests with Karma + Mocha? No
? Setup e2e tests with Nightwatch? (Y/n) n
? Setup e2e tests with Nightwatch? No

   vue-cli · Generated "desktop".

   To get started:

     npm install
     npm run dev

   Documentation can be found at https://vuejs-templates.github.io/webpack


zqq@asus MINGW64 ~/desktop
$ cd push
、、、、、、、、
-----------------------------------------------------------------------------------------------------------------------------------
方方的方案
- npm init-y//默认选项是yes+安装npm初始化
- npm init //生成一个package.json

git add . 一下，标注进行了npm init

下面安装vue使用的命令行工具
- npm install -g vue-cli //相当于把webpackage的相关包都装好了
- vue init webpack .  //显示如下
zqq@asus MINGW64 ~/desktop/vue-practice/vue-use (master)
$ vue init webpack .

? Generate project in current directory? (Y/n)
? Generate project in current directory? Yes

? Project name vue-use
? Project description (A Vue.js project)
? Project description A Vue.js project
? Author (july77 <ljlpsy11@gmail.com>)
? Author july77 <ljlpsy11@gmail.com>
? Vue build standalone
? Install vue-router? (Y/n) n
? Install vue-router? No
? Use ESLint to lint your code? (Y/n) n
? Use ESLint to lint your code? No
? Setup unit tests with Karma + Mocha? (Y/n) n
? Setup unit tests with Karma + Mocha? No
? Setup e2e tests with Nightwatch? (Y/n) n
? Setup e2e tests with Nightwatch? No

   vue-cli · Generated "vue-use".

   To get started:

     npm install
     npm run dev

   Documentation can be found at https://vuejs-templates.github.io/webpack
下一步，按照 提示分别执行
- npm install
- npm run dev

- 生成的App.vue里包括三部分，template相当于html标签,里面必须要加上至少一个根标签（必须，mvc里的v,就是它长的样子），即最终显示在页面里的内容
然后是script（js，相当引入控制器/功能）,操作页面元素
style部分（css）
main.js负责相入页面听呈现需要的vue依赖和App的vue文件
index.html只是一个id="app"的div文件

- 引入一个自己的vue:
在components下面新建一个my.vue:
<template>
    <dl id="test">
        <dt>姓名</dt>
        <dd>eleven</dd>
        <dt>年龄</dt>
        <dd>18</dd>
        <dt>性别</dt>
        <dd>female</dd>
    </dl>
</template>

<style>
      #test{
        text-align: center;
        color:red;
        display:flex;
        justify-content: center; 
        align-items: center; 
      }
</style>
- App.vue做相应的改变 //即引入自己的vue文件
<template>
  <div id="app">
    <My></My>
    <Hello />
  </div>
</template>

<script>
import My from './components/My' //也可建在别的目录，但路径要做相应的改变
import Hello from './components/Hello'
export default {
  name: 'app',
  components: {
    "My": My,
    "Hello": Hello
  }
}
</script>

- 如果不想写一个就引入一个，可以在main.js里注册一个自己的全局组件：//建议少用全局，以免同别人同名
Vue.component('July',{
  template:'<h1 id="july">全局组件<div>{{name}}</div><div>{{age}}</div><div>{{gender}}</div></h1>',
  data(){
    return{
      name:'July77',
      age:'17',
      gender:'girl'
    }
  }
})
})
- App.vue:
<template>
  <div id="app">
    <My></My>
    <July />
  </div>
</template>

<script>
import My from './components/My'

export default {
  name: 'app',
  components: {
    "My": My,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#test{
        text-align: center;
        color:red;
        display:flex;
        justify-content: center; 
        align-items: center; 
}
#july{
  color:green;
  display:flex;
  justify-content:space-between;
}
</style>
