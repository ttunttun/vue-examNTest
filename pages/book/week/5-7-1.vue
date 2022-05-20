<template>
  <section>
    <v-card class="mx-auto" max-width="700">
      <v-toolbar color="green" dark>
        <ChildHeader />
        <v-toolbar-title>{{ defaultTitle }}5-7-1</v-toolbar-title>
      </v-toolbar>
      <div class="chapter">
        <ul class="chapter_lst">
          <li>
            <div class="version">5.7.1</div>
            <div class="content">
              <p>computed</p>
              <p><code>computed</code>는 데이터 값에 변경이 일어나는지 감시한다.</p>
              <h1>Full Name: {{fullName}}</h1>
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
        firstName: 'Dongwook',
        lastName: 'Lee',
      };
    },
    mounted () {
      document.querySelector('#navItem2').classList.add('v-list-item--active');
    },
    computed:{
      fullName() {
        return this.firstName + ' ' + this.lastName;
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
    option { 
      background-color:#000;
    }
  }
</style>