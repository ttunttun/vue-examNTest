<template>
  <section>
    <v-card class="mx-auto" max-width="500">
        <v-toolbar color="green" dark>
        <ChildHeader />
        <v-toolbar-title>{{ defaultTitle }}5-5</v-toolbar-title>
      </v-toolbar>
    </v-card>
  </section>
</template>
<script>
  import ChildHeader from '~/components/common/childHeader.vue';
  export default {
    name: '',
    components: {},
    data() {
      return {
        defaultTitle: '프로젝트 투입 일주일전 예제 ',
      };
    },
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    unmounted() {},
    mehthods: {}
  }
</script>