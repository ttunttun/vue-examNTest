<template>
  <section>
    <v-card class="mx-auto">
      <v-list dense>
        <v-subheader>책 예제 따라하기</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <nuxt-link :to="item.to">{{item.title}}</nuxt-link>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </section>
</template>

<script>
export default {
  name: '책 예제',
  data() {
    return {
      viewTest: false,
      selectedItem: null,
      items: [
        {
          icon:'mdi-table-of-contents',
          title: '3-12',
          to: '/book/3-12'
        },
      ],
    }
  },
}
</script>

<style lang="scss">
  @import "~/assets/variables.scss";
  @import "~/assets/custom-vuetify.scss";
</style>

<style scoped>
  .v-subheader { font-weight:700; font-size:1em; }
</style>
