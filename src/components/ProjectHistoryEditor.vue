<template>
    <div>
        <h2>学习经历</h2>
        <el-form>
            <div class="item-container" v-for="(item,index) in projectHistory">
                <el-form-item label="项目名称">
                    <el-input v-model="item.name"></el-input>
                </el-form-item>
                <el-form-item label="功能实现">
                    <el-input v-model="item.show"></el-input>
                </el-form-item>
                <el-form-item label="技术细节">
                    <el-input v-model="item.detail"></el-input>
                </el-form-item>
                <i class="el-icon-circle-close" v-on:click="removeProjectHistory(index)"></i>
                <hr>
            </div>
        </el-form>
    
        <el-button type="primary" v-on:click="addProjectHistory">添加</el-button>
    
    </div>
</template>

<script>
export default {
  props: ['projectHistory'],
  methods: {
        addProjectHistory() {
            this.projectHistory.push({
                name: '',
                show: '',
                detail: ''
            })
        },
        removeProjectHistory(index) {
            this.projectHistory.splice(index, 1) //从某个地方删除一个
        }
    }
}
</script>