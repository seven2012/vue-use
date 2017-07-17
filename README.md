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
npm init-y//默认选项是yes+安装npm初始化
npm init //生成一个package.json

git add . 一下，标注进行了npm init

下面安装vue使用的命令行工具
npm install -g vue-cli //相当于把webpackage的相关包都装好了
npm init webpack .  //显示如下
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
npm install
npm run dev
