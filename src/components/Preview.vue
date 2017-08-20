<template>
    <div id="preview-resume">
        <section id="personal-data">
            <h1>{{resume.profile.name || '请填写姓名'}}</h1>
            <p>{{resume.profile.birth || '请填写出生年月'}} | {{resume.profile.city || '请填写所在城市'}}</p>
            <hr>
        </section>

        <section id="personal-contact">
            <h1>联系方式</h1>
            <ul>
                <li>{{resume.contact.phone || '请填写手机号码'}}</li>
                <li>{{resume.contact.email || '请填写邮箱地址'}}</li>
                <li>{{resume.contact.QQ || '请填写QQ'}}</li>
                <li>{{resume.contact.address || '请填写住址'}}</li>
            </ul>
            <hr>
        </section>  
    
        <section id="workhistory" v-if="filter(resume.workHistory).length > 0">
            <h1>工作经历</h1>
            <ul>
                <li v-for="workHistory in filter(resume.workHistory)" v-bind:key=workHistory.id>
                    <p>{{workHistory.company || '请填写公司名称'}}</p>
                    <p>{{workHistory.content || '请填写工作内容'}} | {{workHistory.time || '请填写在职时间'}}</p>
                    <hr>
                </li>
    
            </ul>
        </section>
    
        <section id="studyhistory" v-if="filter(resume.studyHistory).length > 0">
    
            <h1>学习经历</h1>
            <ul>
                <li v-for="studyHistory in filter(resume.studyHistory)" v-bind:key=studyHistory.id>
                    <p>{{studyHistory.school || '请填写学校名称'}}</p>
                    <p>{{studyHistory.degree || '请填写学位/学历'}} | {{studyHistory.time || '请填写就读时间'}}</p>
                    <hr>
                </li>
    
            </ul>
        </section>
    
        <section id="project-history" v-if="filter(resume.projectHistory).length > 0">
            <h1>项目经历</h1>
            <ul>
                <li v-for="projectHistory in filter(resume.projectHistory)" v-bind:key=projectHistory.id>
                    <p>{{projectHistory.name || "请填写项目名称"}}</p>
                    <p>{{projectHistory.show || '请填写项目功能'}} | {{projectHistory.detail || '请填写项目技术亮点'}}</p>
                    <hr>
                </li>
    
            </ul>
        </section>
    
        <section id="rewards-about" v-if="filter(resume.rewardsEditor).length > 0">
            <h1>获奖情况</h1>
            <ul>
                <li v-for="rewardsEditor in filter(resume.rewardsEditor)" v-bind:key=rewardsEditor.id>
                    <p>{{rewardsEditor.name || "请填写所获奖项"}}</p>
                    <p>{{rewardsEditor.time || '请填写获奖时间'}}</p>
                    <hr>
                </li>
            </ul>
    
        </section>
        
    </div>
</template>

<script>
export default {
    props: ['resume'],
    methods: {
        filter(array) { //找出非空对象
            return array.filter(item => !this.isEmpty(item))
        },
        isEmpty(object) { //判断：只要有一个value不是falsy,就返回empty = false,就说是非空对象
            let empty = true
            for (let key in object) {
                if (object[key]) {
                    empty = false
                    break
                }
            }
            return empty
        }
    }
}
</script>


<style>
h1{
    font-weight: normal;
    font-size:24px;
}
#preview-resume {
    padding:15px;
}
li{
    line-height: 1.5;
}
p{
    line-height: 1.5;
}
</style>