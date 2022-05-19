<template>
  <section>
    <v-card class="mx-auto" max-width="700">
      <v-toolbar color="green" dark>
        <ChildHeader />
        <v-toolbar-title>{{ defaultTitle }}5-3</v-toolbar-title>
      </v-toolbar>
      <div class="chapter">
        <ul class="chapter_lst">
          <li>
            <div class="version">5.3.3.1</div>
            <div class="content">
              <input type="text" v-model="valueModel"/>
            </div>
          </li>
          <li>
            <div class="version">5.3.3.2</div>
            <div class="content">
              <input type="number" v-model="numberModel"/>
            </div>
          </li>
          <li>
            <div class="version">5.3.3.3</div>
            <div class="content">
              <textarea v-model="message"></textarea>
            </div>
          </li>
          <li>
            <div class="version">5.3.3.4</div>
            <div class="content">
              <select v-model="city">
                <option value="02">서울</option>
                <option value="21">부산</option>
                <option value="064">제주</option>
              </select>
            </div>
          </li>
          <li>
            <div class="version">5.3.3.5</div>
            <div class="content">
              <label><input type="checkbox" v-model="checked"/> {{checked}}</label>
            </div>
            <div class="content">
              <label><input type="checkbox" v-model="checked2" true-value="yes" false-value="no" /> {{checked2}}</label>
            </div>
            <div class="content">
              <label for=""><input type="checkbox" name="" id="" value="서울" v-model="checked3"/> 서울</label>
              <label for=""><input type="checkbox" name="" id="" value="부산" v-model="checked3"/> 부산</label>
              <label for=""><input type="checkbox" name="" id="" value="제주" v-model="checked3"/> 제주</label>
              <br/>
              <span>체크한 지역: {{ checked3 }}</span>
            </div>
          </li>
          <li>
            <div class="version">5.3.3.6</div>
            <div class="content">
              <label for=""><input type="radio" v-bind:value="radioValue1" v-model="picked" /> 서울</label>
              <label for=""><input type="radio" v-bind:value="radioValue2" v-model="picked" /> 부산</label>
              <label for=""><input type="radio" v-bind:value="radioValue3" v-model="picked" /> 제주</label>
              <br/>
              <span>선택한 지역: {{picked}}</span>
            </div>
          </li>
          <li>
            <div class="version">5.3.4.1</div>
            <div class="content">
              <img v-bind:src="imgSrc" width="100" />
            </div>
          </li>
          <li>
            <div class="version">5.3.4.2</div>
            <div class="content">
              <input type="text" v-model="textValue" />
              <button v-bind:disabled="textValue==''">Click</button>
            </div>
          </li>
          <li>
            <div class="version">5.3.5</div>
            <div class="content">
              <div class="container" v-bind:class="[activeClass, errorClass]">Class Binding</div>
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
      valueModel: 'South Korea',
      numberModel: 3,
      message: '여러 줄을 입력할 수 있는 textarea 입니다.',
      city: '064',
      checked: true,
      checked2: true,
      checked3: [],
      picked: '',
      radioValue1: '서울',
      radioValue2: '부산',
      radioValue3: '제주',
      imgSrc: "https://kr.vuejs.org/images/logo.png",
      textValue: "",
      activeClass: 'active',
      errorClass: 'text-red'
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted () {
    document.querySelector('#navItem2').classList.add('v-list-item--active');
  },
  unmounted() {},
  mehthods: {}
}
</script>
<style lang="scss" scoped>
  .chapter {
    padding:1em;
    .chapter_lst {
      > li {
        margin-bottom:15px;
      }
      .version {
        font-size:18px;
        font-weight:bold;
      }
    }
  }
  input[type=text], [type=number], textarea {
    width:100%;
    padding:0.5em;
    border:1px solid rgba(255,255,255,0.2);
    color:#fff;
  }
  select {
    width:100%;
    border:1px solid rgba(255,255,255,0.2);
    color:#fff;
  }
  .container { 
    width:100%;
    height:200px;
  }
  .active {
    background-color:yellow;
    font-weight:bold;
  }
  .text-red {
    color:red;
  }
</style>