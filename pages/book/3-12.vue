<template>
  <section>
    <v-card
      class="mx-auto"
      max-width="500"
    >
      <v-toolbar
        color="green"
        dark
      >
        <ChildHeader />
        <v-toolbar-title>책 예제 3-12</v-toolbar-title>
      </v-toolbar>
    </v-card>
  </section>
</template>
<script>
import ChildHeader from '~/components/common/childHeader.vue'
export default {
  components: {
    ChildHeader
  },
  data() {
    return {

    }
  }
}
</script>
