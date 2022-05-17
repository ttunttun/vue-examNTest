<template>
  <section>
    <div>
      <v-card
        class="mx-auto"
        tile
      >
        <v-list dense>
          <v-subheader>Nuxt App List</v-subheader>
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
                  <nuxt-link :to="item.link">{{item.text}}</nuxt-link>
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
        {text: 'form', link: '/nuxt-app/form'},
        {text: 'component', link: '/nuxt-app/component'},
        {text: 'store', link: '/nuxt-app/store'}
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
p {font-size:12px; line-height:1.5em; color:#000}
button {border:1px solid #ddd; border-radius:2px; padding:.2em; cursor: pointer;;}
.v-subheader { font-weight:700; font-size:1em; }
</style>
