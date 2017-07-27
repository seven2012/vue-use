<template>
    <div>
        <h2>工作经历</h2>
        <el-form>
            <div class="item-container" v-for="(item,index) in workHistory">
                <el-form-item label="公司名称">
                    <el-input v-model="item.company"></el-input>
                </el-form-item>
                <el-form-item label="工作内容">
                    <el-input v-model="item.content"></el-input>
                </el-form-item>
                <el-form-item label="工作时间">
                    <el-input v-model="item.time"></el-input>
                </el-form-item>
                <i class="el-icon-circle-close" v-on:click="removeWorkHistory(index)"></i>
                <hr>
            </div>
        </el-form>
    
        <el-button type="primary" v-on:click="addWorkHistory">添加</el-button>
    
    </div>
</template>

<script>
export default {
  props: ['workHistory'],
  methods: {
        addWorkHistory() {
            this.workHistory.push({
                company: '',
                content: '',
                time: ''
            })
        },
        removeWorkHistory(index) {
            this.workHistory.splice(index, 1) //从某个地方删除一个
        }
    }
}
</script>
