<template>
  <div id="app" v-bind:class="{previewMode:previewMode}">
    <Topbar class="topbar" v-on:preview="preview" />
    <main>
      <Editor v-bind:resume="resume" class="editor" />
      <Preview v-bind:resume="resume" class="preview" />
    </main>
    <el-button id="exitPreview" v-on:click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
export default {
  components: {
    Topbar, Editor, Preview
  },
  data() {
    return {
      previewMode: false,
      resume: {
        profile: { name: '', birth: '', city: '' },
        workHistory: [{ company: '', content: '', time: '' },],
        studyHistory: [{ school: '', degree: '', time: '' },],
        projectHistory: [{ name: '', show: '', detail: '' },],
        rewardsEditor: [{ name: '', time: '' },],
        contact: { phone: '', email: '', QQ: '', address: '' }
      }
    }
  },
  methods: {
    preview() {
      this.previewMode = true
    },
    exitPreview() {
      this.previewMode = false
    }
  }
}
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh; //width:980px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
}

.topbar {
  min-height: 10vh;
  box-shadow: 0 0 2px rgba(196, 196, 196, 0.5);
  position: relative;
  z-index: 1;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  overflow: hidden;
}

#app main {
  display: flex;
  flex: 1;
  background: #fafafa;
  >.editor {
    border: 1px solid rgba(196, 196, 196, 0.5);
    box-shadow: 0 0 2px rgba(196, 196, 196, 0.5);
    width: 40%;
    margin: 16px 8px 16px 16px;
    background: #fff;
    border-radius: 4px;
    h2 {
      text-align: center;
      margin-bottom: 15px;
    }
  }
  >.preview {
    flex: 1;
    border: 1px solid rgba(196, 196, 196, 0.5);
    box-shadow: 0 0 2px rgba(196, 196, 196, 0.5);
    margin: 16px 16px 16px 8px;
    background: #fff;
    border-radius: 4px;
    margin:16px auto;
  }
}
.previewMode #topbar-resume {
    display: none;
  }
  
.previewMode #editor-resume {
    display: none;
  }
.previewMode #preview-resume {
    max-width: 800px;
  }
.previewMode #exitPreview {
    display: none;
  }
.previewMode #exitPreview {
    display: inline-block;
    position: fixed;
    right: 16px;
    bottom: 16px;
  }

</style>
