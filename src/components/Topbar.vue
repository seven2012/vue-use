<template>
    <div id="topbar-resume">
        <div class="logo">
            VueResumer
        </div>
        <div class="actions">
            <el-button type="primary">注册</el-button>
            <el-button>登录</el-button>
        </div>
        <div class="status">
            <el-button type="primary">保存</el-button>
            <el-button v-on:click="preview">预览</el-button>
        </div>
    </div>
</template>

<style lang="scss">
#topbar-resume {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    font-size: 20px;
    .logo{
        width:65%;
    }
    >.actions{
        
    }
    >.status{
        
    }
}
</style>

<script>
export default {
  methods:{
      preview(){
          this.$emit('preview')
      }
  }
}
</script>
