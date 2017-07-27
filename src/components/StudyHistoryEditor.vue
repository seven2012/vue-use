<template>
    <div>
        <h2>学习经历</h2>
        <el-form>
            <div class="item-container" v-for="(item,index) in studyHistory">
                <el-form-item label="学校名称">
                    <el-input v-model="item.school"></el-input>
                </el-form-item>
                <el-form-item label="学位">
                    <el-input v-model="item.degree"></el-input>
                </el-form-item>
                <el-form-item label="时间">
                    <el-input v-model="item.time"></el-input>
                </el-form-item>
                <i class="el-icon-circle-close" v-on:click="removeStudyHistory(index)"></i>
                <hr>
            </div>
        </el-form>
    
        <el-button type="primary" v-on:click="addStudyHistory">添加</el-button>
    
    </div>
</template>

<script>
export default {
  props: ['studyHistory'],
  methods: {
        addStudyHistory() {
            this.studyHistory.push({
                school: '',
                degree: '',
                time: ''
            })
        },
        removeStudyHistory(index) {
            this.studyHistory.splice(index, 1) //从某个地方删除一个
        }
    }
}
</script>