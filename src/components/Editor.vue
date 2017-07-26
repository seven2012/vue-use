<template>
    <div id="editor-resume">
        <nav>
            <ol>
                <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active: currentTab === i}" v-on:click="currentTab = i">
                    <svg class="icon">
                        <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
                    </svg>
                </li>
                <!--<li v-bind:class="{active:currentTab === 0}" v-on:click="currentTab = 0">
                                    <svg class="icon">
                                        <use xlink:href="#icon-id1"></use>
                                    </svg>
                                </li>
                                <li v-bind:class="{active:currentTab === 1}" v-on:click="currentTab = 1">
                                    <svg class="icon">
                                        <use xlink:href="#icon-works2"></use>
                                    </svg>
                                </li>
                                <li v-bind:class="{active:currentTab === 2}" v-on:click="currentTab = 2">
                                    <svg class="icon">
                                        <use xlink:href="#icon-study3"></use>
                                    </svg>
                                </li>
                                <li v-bind:class="{active:currentTab === 3}" v-on:click="currentTab = 3">
                                    <svg class="icon">
                                        <use xlink:href="#icon-project4"></use>
                                    </svg>
                                </li>
                                <li v-bind:class="{active:currentTab === 4}" v-on:click="currentTab = 4">
                                    <svg class="icon">
                                        <use xlink:href="#icon-rewards5"></use>
                                    </svg>
                                </li>
                                <li v-bind:class="{active:currentTab === 5}" v-on:click="currentTab = 5">
                                    <svg class="icon">
                                        <use xlink:href="#icon-telephone6"></use>
                                    </svg>
                                </li>-->
            </ol>
        </nav>
        <ol class="panes">
            <!--<li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active:currentTab === i}">
                                content{{i+1}}
                            </li>-->
            <li v-bind:class="{active:currentTab === 0}">
                <ProfileEditor v-bind:profile="profile" />
            </li>
            <li v-bind:class="{active:currentTab === 1}">
                <WorkHistoryEditor v-bind:workHistory="workHistory" />
            </li>
            <li v-bind:class="{active:currentTab === 2}">
                <h2>学习经历</h2>
            </li>
            <li v-bind:class="{active:currentTab === 3}">
                <h2>项目经历</h2>
            </li>
            <li v-bind:class="{active:currentTab === 4}">
                <h2>获奖情况</h2>
            </li>
            <li v-bind:class="{active:currentTab === 5}">
                <h2>联系方式</h2>
            </li>
        </ol>
    </div>
</template>

<script>
import ProfileEditor from './ProfileEditor'
import WorkHistoryEditor from './WorkHistoryEditor'
export default {
    components:{ ProfileEditor,WorkHistoryEditor },
    data() {
        return {
            currentTab: 0,
            icons: ['id1', 'works2', 'study3', 'project4', 'rewards5', 'telephone6'],
            profile: {
                name: '',
                birth: '',
                city: ''
            },
            workHistory: [
                {
                    company: '',
                    content: '',
                    time: ''
                },
            ]
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
            .work-container {
                position: relative;
                >.el-icon-circle-close{
                    position:absolute;
                    right:0;
                    top:0;
                }
            }
        }
    }
}
</style>