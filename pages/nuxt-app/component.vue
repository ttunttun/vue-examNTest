<template>
  <section>
    <div>
        <h1>Component</h1>
        <v-divider/>
        <test-comp
            ref="childComp"
            :text1="textfield1"
            @changeFromChild="changeFromChild"
        >
        <template v-slot:slot2>
          <p>222</p>
          </template>
        <template v-slot:slot1>
          <p>1111</p>
          </template>
        </test-comp>
        <br>
        <v-btn @click="textfield1='텍스트 변경됨'">자식 컴포넌트로 보내는 데이터 변경</v-btn>
        <v-divider/>
        <div>{{dataFromComp}}</div>
        <v-divider />
        <v-btn @click="runFuncChild">자식 컴포넌트의 함수 실행</v-btn>
    </div>
  </section>
</template>

<style scoped>
hr {margin:.8em 0;}
select, input[type=text] {border:1px solid #333; appearance:initial;}
</style>

<script>
import TestComp from '~/components/comp/TestComp.vue'
export default {
  components: {
    TestComp,
  },
  computed: {

  },
  data(){
    return {
        //기본 값 정의 필요
        textfield1: '자식 컴포넌트로 보내는 데이터',
        dataFromComp: '자식 컴포넌트에서 받을 데이터',
    }
  },
  methods: {
    changeFromChild(val){
        console.log("dd")
        this.dataFromComp = val
    },
    runFuncChild(){
        this.$refs.childComp.functionFromParent()
    }

  }
}
</script>
<style scoped>
.v-subheader { font-weight:700; font-size:1em; }
</style>
