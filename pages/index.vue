<template>
  <section>
    <v-card class="mx-auto" max-width="500">
      <v-toolbar
        color="light-blue"
        dark
      >
      <v-toolbar-title>Index</v-toolbar-title>

      </v-toolbar>
      <v-list dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <nuxt-link :to="item.to">{{item.text}}</nuxt-link>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      viewTest: false,
      selectedItem: null,
      items: [
        {
          icon: 'mdi-format-list-bulleted',
          text: 'Nuxt App 예제',
          to: '/nuxt-app/'
        },
        {
          icon: 'mdi-format-list-bulleted',
          text: '책 예제',
          to: '/book/'
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
