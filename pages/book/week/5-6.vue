<template>
  <section>
    <v-card class="mx-auto" max-width="500">
        <v-toolbar color="green" dark>
        <ChildHeader />
        <v-toolbar-title>{{ defaultTitle }}5-6</v-toolbar-title>
      </v-toolbar>
      <div class="chapter">       
        <ul class="chapter_lst">
          <li>
            <v-btn class="mx-2" fab dark small color="pink" @click="increaseCounter">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <p>The counter is:  {{ counter }}</p>
          </li>
          <li>
            <v-btn class="mx-2" fab dark small color="indigo" @click="setCount(7)">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </li>
          <li>
            <v-btn class="mx-2" fab dark small @click="one(), two()">
              <v-icon>mdi-alert</v-icon>
            </v-btn>
          </li>
          <li>
            <div class="version">5.6.2</div>
            <div class="content">
              <select name="" id="" v-model="selectedValue" @change="changeSelect">
                <option value="서울">서울</option>
                <option value="부산">부산</option>
                <option value="제주">제주</option>
              </select>
            </div>
          </li>
        </ul>
      </div>
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
        counter:0,
        selectValue: ''
      };
    },
    methods: {
      increaseCounter() {
        this.counter = this.counter + 1;
      },
      setCount(counter) {
        this.counter = counter;
      },
      one() {
        alert('One');
      },
      two() {
        alert('Two');
      },
      changeSelect() {
        alert(this.selectValue);
      }
    }
  }
</script>
<style lang="scss" scoped>
  .chapter {
    padding:1em;
    .chapter_lst {
      > li {
        margin-bottom:15px;
        list-style-type: none;
      }
      .version {
        font-size:18px;
        font-weight:bold;
      }
    }
  }
  select {
    width:100%;
    border:1px solid rgba(255,255,255,0.2);
    color:#fff;
  }
</style>