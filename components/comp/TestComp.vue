<template>
    <div class="wrap">
        <h2>자식 컴포넌트</h2>
        <p>{{text1}}</p>
        <v-btn @click="changeParent">부모 컴포넌트의 데이터를 변경할 버튼</v-btn>
        <slot name="slot1"></slot>
        <slot name="slot2"></slot>
    </div>
</template>

<style scoped>
.wrap {border:1px solid #ddd; padding:1em; border-radius:.2em; background-color:#f3f3f3;}
</style>

<script>
import { mapState } from 'vuex'
export default {
    props: {
        text1: {
            type: String,
            default: '기본텍스트'
        }
    },
    computed: {

    },
    data(){
        return {
            toParentText1: '부모로 보낼 텍스트1'
        }
    },
    methods: {
        changeParent(){
            console.log(1)
            this.$emit('changeFromChild', this.toParentText1)
        },
        functionFromParent(){
            alert("이 함수는 부모 컴포넌트에서 실행함")
        }

    }
}
</script>
