<template>
  <section>
    <v-card class="mx-auto" max-width="700">
      <v-toolbar color="green" dark>
        <ChildHeader />
        <v-toolbar-title>{{ defaultTitle }}5-4</v-toolbar-title>
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
            <tr v-for="(product, index) in productList">
              <td>{{product.name}}</td>
              <td>{{product.price}}</td>
              <td>{{product.category}}</td>
              <td>{{product.deliveryPrice}}</td>
            </tr>
          </tbody>
        </table>
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
        productList: [
          {
            "name": "기계식 키보드",
            "price": 25000,
            "category": "노트북/태블릿",
            "deliveryPrice": 5000
          },
          {
            "name": "무선 마우스",
            "price": 12000,
            "category": "노트북/태블릿",
            "deliveryPrice": 5000
          },
          {
            "name": "아이패드",
            "price": 725000,
            "category": "노트북/태블릿",
            "deliveryPrice": 5000
          },
          {
            "name": "태블릿 거치대",
            "price": 32000,
            "category": "노트북/태블릿",
            "deliveryPrice": 5000
          },
          {
            "name": "무선 충전기",
            "price": 42000,
            "category": "노트북/태블릿",
            "deliveryPrice": 5000
          }
        ]
      };
    },
    mounted () {
      document.querySelector('#navItem2').classList.add('v-list-item--active');
    }
  }
</script>