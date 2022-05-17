<template>
  <section>
    <div>
      <v-card class="mx-auto" max-width="500">
        <v-toolbar color="pink" dark>
          <ChildHeader />
          <v-toolbar-title>폼 입력 바인딩</v-toolbar-title>
        </v-toolbar>
        <h1>Store</h1>
        <div>텍스트 가져오기 store/index.js/subject: {{thisSubject}}</div>
        <button @click="setSubjectData">'테스트용 제목'을 store/index.js/subject에 저장</button>
        <hr/>
        <div>오브젝트 배열 가져오기 store/index.js/listData :</div>

        <button @click="setListData">static/test.json 데이터를 파싱해서 스토어(store/index.js/listData)에 저장</button>
        <div v-if="thisListData">
            <h2>데이터 목록</h2>
            <ul>
                <li
                    v-for="(item, index) in thisListData"
                    :key="index"
                >
                    상품명 : {{item.product_name}} / 가격 : {{item.product_price}} / 가격(comma) : {{addComma(item.product_price)}}
                </li>
            </ul>
        </div>
      </v-card>
    </div>
  </section>
</template>

<style scoped>
hr {margin:.8em 0;}
</style>>

<script>
import { mapState } from 'vuex'
import ChildHeader from '~/components/common/childHeader.vue'
export default {
  components: {
    ChildHeader
  },
  computed: {
    ...mapState('commons', {
      thisSubject: state => state.subject, //thisSubject를 store/index.js/subject로 정의
      thisListData: state => state.listData //thisSubject를 store/index.js/subject로 정의
    })
  },
  data(){
    return {

    }
  },
  methods: {
    addComma(data){
        return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    setSubjectData(){
        this.$store.commit("commons/setSubject", '테스트용 제목')
    },
    setListData(){
        this.$store.dispatch("commons/getListData")
    }
  },
  mounted () {
    document.querySelector('#navItem1').classList.add('v-list-item--active');
  }
}
</script>
