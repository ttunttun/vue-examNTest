<template>
  <section>
    <v-card class="mx-auto" max-width="700">
      <v-toolbar color="green" dark>
        <ChildHeader />
        <v-toolbar-title>{{ defaultTitle }}5-3</v-toolbar-title>
      </v-toolbar>
      <ul class="chapter_list">
        <li>
          <div class="version"><strong>5.3.3.1</strong></div>
          <div class="content">
            <input type="text" v-model="valueModel"/>
          </div>
        </li>
      </ul>
    </v-card>
  </section>
</template>
<script>
import ChildHeader from '~/components/common/childHeader.vue';
export default {
  name: '',
  components: {
    ChildHeader
  },
  data() {
    return {
      defaultTitle: '프로젝트 투입 일주일전 예제 ',
      valueModel: 'South Korea'
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted () {
    document.querySelector('#navItem2').classList.add('v-list-item--active');
  },
  unmounted() {},
  mehthods: {}
}
</script>
<style lang="scss" scoped>
  input {
    border:1px solid #ccc;
    color:#fff;
  }
</style>