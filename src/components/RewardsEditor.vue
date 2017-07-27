<template>
    <div>
        <h2>获奖情况</h2>
        <el-form>
            <div class="item-container" v-for="(item,index) in rewardsEditor">
                <el-form-item label="所获奖项">
                    <el-input v-model="item.name"></el-input>
                </el-form-item>
                <el-form-item label="获奖时间">
                    <el-input v-model="item.time"></el-input>
                </el-form-item>
                <i class="el-icon-circle-close" v-on:click="removeRewardsEditor(index)"></i>
                <hr>
            </div>
        </el-form>
    
        <el-button type="primary" v-on:click="addRewardsEditor">添加</el-button>
    
    </div>
</template>

<script>
export default {
  props: ['rewardsEditor'],
  methods: {
        addRewardsEditor() {
            this.rewardsEditor.push({
                name: '',
                time: ''
            })
        },
        removeRewardsEditor(index) {
            this.rewardsEditor.splice(index, 1) //从某个地方删除一个
        }
    }
}
</script>