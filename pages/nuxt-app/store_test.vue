<template>
  <section>
    <div>
      <v-card class="mx-auto" max-width="700">
        <v-toolbar color="pink" dark>
          <ChildHeader />
          <v-toolbar-title>Store Test 뉴스</v-toolbar-title>
        </v-toolbar>
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
      thisSubject: state => newState.subject, //thisSubject를 store/index.js/subject로 정의
      thisListData: newState => newState.listData //thisSubject를 store/index.js/subject로 정의
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
        this.$store.commit("commons/setSubject", '삼성전자 인기뉴스')
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
