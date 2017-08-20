<template>
    <div id="editor-resume">
        <nav>
            <ol>
                <li v-for="i in [0,1,2,3,4,5]" v-bind:key='i.id' v-bind:class="{active: currentTab === i}" v-on:click="currentTab=i">
                    <svg class="icon">
                        <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
                    </svg>
                </li>
            </ol>
        </nav>
        <ol class="panes">
            <li v-bind:class="{active:currentTab === 0}">
                <ProfileEditor v-bind:profile="resume.profile" />
            </li>
            <li v-bind:class="{active:currentTab === 1}">           
                <ArrayEditor v-bind:items="resume.workHistory" v-bind:labels="{company:'公司名称',content:'工作内容',time:'时间'}" v-bind:title="'工作经历'" />
            </li>
            <li v-bind:class="{active:currentTab === 2}">
                <ArrayEditor v-bind:items="resume.studyHistory" v-bind:labels="{school:'学校名称',degree:'学位',time:'时间'}" v-bind:title="'学习经历'" />
            </li>
            <li v-bind:class="{active:currentTab === 3}">
                <ArrayEditor v-bind:items="resume.projectHistory" v-bind:labels="{name:'项目名称',show:'功能实现',detail:'技术细节'}" title="项目经历" />
            </li>
            <li v-bind:class="{active:currentTab === 4}">
                <ArrayEditor v-bind:items="resume.rewardsEditor" v-bind:labels="{name:'所获奖项',time:'获奖时间'}" title="获奖情况" />
            </li>
            <li v-bind:class="{active:currentTab === 5}">
                <ContactEditor v-bind:contact="resume.contact" />
            </li>
        </ol>
    </div>
</template>

<script>
import ProfileEditor from './ProfileEditor'
import ArrayEditor from './ArrayEditor'
import ContactEditor from './ContactEditor'

export default {
    components:{ ProfileEditor,ArrayEditor,ContactEditor },
    props:['resume'],
    data() {
        return {
            currentTab: 0,
            icons: ['id1', 'works2', 'study3', 'project4', 'rewards5', 'telephone6'],     
        }
    },
    created() {
        // console.log(this.profile)
        // setTimeout(() => {
        //     console.log(this.profile)
        // }, 10000)
    }
}
</script>




<style lang="scss">
#editor-resume {
    display: flex;
    min-height: 100px;
    overflow: hidden;
    >nav {
        background: black;
        width: 70px;
        height: 100%;
        >ol>li {
            text-align: center;
            padding: 15px 0;

            >.icon {
                width: 24px;
                height: 24px;
                fill: white;
            }
            &.active {
                background: white;
                >.icon {
                    fill: black;
                }
            }
        }
    }
    >.panes {
        flex: 1;
        >li {
            display: none;
            padding: 15px;
            overflow: auto;
            height: 100%;
            &.active {
                display: block;
            }
            .item-container {
                position: relative;
                >.el-icon-circle-close{
                    position:absolute;
                    right:0;
                    top:0;
                }
                >hr{
                    opacity: 0.2;
                }
            }
        }
    }
}
</style>