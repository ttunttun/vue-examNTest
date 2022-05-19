<template>
  <section>
    <div>
      <v-card
        class="mx-auto"
        max-width="500"
      >
        <v-toolbar
          color="pink"
          dark
        >
          <v-toolbar-title>Nuxt App List</v-toolbar-title>
        </v-toolbar>
        <v-list dense>
          <v-list-item-group
            v-model="selectedItem"
            color="primary"
          >
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                  <nuxt-link :to="item.href">{{item.text}}</nuxt-link>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      testNum : 0,
      viewTest : false,
      interv : null,
      selectedItem: null,
      items: [
        {
          icon: 'mdi-file-document',
          text: 'form',
          href: '/nuxt-app/form'
        },
        {
          icon: 'mdi-application',
          text: 'component',
          href: '/nuxt-app/component'
        },
        {
          icon: 'mdi-store',
          text: 'store',
          href: '/nuxt-app/store'
        },
        {
          icon: 'mdi-store',
          text: 'store_test',
          href: '/nuxt-app/store_test'
        }
      ]
    }
  },
  methods: {
    updateDomTest(){
      this.viewTest = true
    },
    updateDomTest2(){
      this.interv = setInterval(() => {
        this.testNum++
      }, 100);
    },
    updateDomTest3(){
      clearInterval(this.interv)
    },
    goAbout(){
      //this.$router.push({path: 'about/greeting', query: {q: "aaa"}});
      this.$router.push({name: 'about', query: {q: "bbb"}});
    }
  }
}
</script>


<style scoped>
p {line-height:1.5em; color:#000}
button {border:1px solid #ddd; border-radius:2px; padding:.2em; cursor: pointer; }
.v-subheader { font-weight:700; font-size:1em; }
</style>
