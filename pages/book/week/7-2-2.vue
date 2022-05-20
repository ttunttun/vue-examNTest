<template>
  <section>
    <v-card
      class="mx-auto"
      max-width="700"
    >
      <v-toolbar color="green" dark>
        <ChildHeader />
        <v-toolbar-title>{{ defaultTitle }}7-7-2</v-toolbar-title>
      </v-toolbar>
      <div class="chapter">
        <table>
          <thead>
            <tr>
              <th>제품명</th>
              <th>가격</th>
              <th>카테고리</th>
              <th>배송료</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="i" v-for="(product, i) in productList">
              <td>{{product.product_name}}</td>
              <td>{{product.price}}</td>
              <td>{{product.category}}</td>
              <td>{{product.delivery_price}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p>vue 라이프사이클 훅에 의해서 컴포넌트가 생성 된 후 created함수가 실행</p>
        <p>created함수에서 methods내의 getList함수를 호출하여 mock 서버로부터 미리 정의해놓은 데이터를 받아와서 data 함수의 productList에 할당을 하고, v-for 디렉티브를 통해서 화면에 테이블 목록(tr)을 랜더링 하게 된다.</p>
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
        productList:[]
      };
    },
    beforeCreate() {},
    created() {
      this.getList();
    },
    beforeMount() {},
    mounted () {
      document.querySelector('#navItem2').classList.add('v-list-item--active');
    },
    unmounted() {},
    methods: {
      async getList() {
        // this.productList = await this.$api("https://ca2b6be0-3e33-405f-8d83-4a796c11de77.mock.pstmn.io/test", "get");
      }
    }
  }
</script>
<style lang="scss" scoped>
  table { 
    width:100%;
    th, td {
      border:1px soild #ddd;
    }
  }
</style>