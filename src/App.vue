<template>
  <div id="app">
    <Topbar class="topbar" />
    <main>
      <Editor class="editor" />
      <Preview class="preview" />
    </main>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
export default {
  components: {
    Topbar, Editor, Preview
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

main {
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
  }
}
</style>
