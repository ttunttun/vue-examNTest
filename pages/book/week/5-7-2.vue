<template>
  <section>
    <v-card class="mx-auto" max-width="700">
      <v-toolbar color="green" dark>
        <ChildHeader />
        <v-toolbar-title>{{ defaultTitle }}5-7-2</v-toolbar-title>
      </v-toolbar>
      <div class="chapter">
        <ul class="chapter_lst">
          <li>
            <div class="version">5.7.2</div>
            <div class="content">
              <p>watch</p>
              <h1>Full Name : {{fullName}}</h1>
              <v-btn @click="changeName">변경</v-btn>
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
        fullName: '',
      };
    },
    mounted () {
      document.querySelector('#navItem2').classList.add('v-list-item--active');
    },
    watch:{
      firstName() {
        this.fullName = this.firstName + ' ' + this.lastName;
      },
      lastName() {
        this.fullName = this.firstName + ' ' + this.lastName;
      }
    },
    methods: {
      changeName() {
        this.firstName = 'Eunsole';
      }
    }
  }
</script>