<template>
  <section>
    <div>
      <v-card class="mx-auto" max-width="500">
        <v-toolbar color="pink" dark>
          <ChildHeader />
          <v-toolbar-title>폼 입력 바인딩</v-toolbar-title>
        </v-toolbar>
        <h2>텍스트 필드</h2>
        <input
            type="text"
            v-model="textfield1"
            :placeholder="'입력해주세요'"
        />
        <br/>
        <span>입력된 값: {{ textfield1 }}</span>
        <br/><br/>
        <h2>체크박스</h2>
        <h3>체크박스-다중</h3>
        <div id=''>
            <input type="checkbox" id="checks1" value="checkedVal1" v-model="checkedNames">
            <label for="checks1">체크박스1</label>
            <input type="checkbox" id="checks2" value="checkedVal2" v-model="checkedNames">
            <label for="checks2">체크박스2</label>
            <input type="checkbox" id="checks3" value="checkedVal3" v-model="checkedNames">
            <label for="checks3">체크박스3</label>
            <br>
            <span>체크된 값: {{ checkedNames }}</span>
        </div>
        <h3>체크박스-싱글</h3>
        <div id=''>
            <input type="checkbox" id="check" value="checkedVal" v-model="checkedStatus">
            <label for="check">체크박스1</label>
        </div>
        <span>체크된 값: {{ checkedStatus }}</span>
        <br/><br/>
        <h2>라디오버튼</h2>
        <div>
            <input type="radio" id="radios1" value="radioVal1" v-model="radioNames">
            <label for="radios1">라디오1</label>
            <input type="radio" id="radios2" value="radioVal2" v-model="radioNames">
            <label for="radios2">라디오2</label>
            <input type="radio" id="radios3" value="radioVal3" v-model="radioNames">
            <label for="radios3">라디오3</label>
        </div>
        <span>체크된 값: {{ radioNames }}</span>
        <br/><br/>
        <h2>셀렉트박스</h2>
        <div>
        <select v-model="selected">
            <option disabled value="">선택해주세요1</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        </div>
        <div>
        <select v-model="selected">
            <option disabled value="">선택해주세요2</option>
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
        </select>
        </div>
        <span>선택된 값: {{ selected }}</span>
        <br/><br/>
        <h2>수식어 : lazy, number, trim</h2>
        <h3>number</h3>
        <input
            type="text"
            v-model="textfield2"
            :placeholder="'입력해주세요'"
        /><br>
        <input
            type="text"
            v-model.number="textfield2"
            :placeholder="'입력해주세요'"
        />
        <span>인풋값은 {{ textfield2}},자료형은 {{ typeof textfield2}}</span>
      </v-card>
    </div>
  </section>
</template>

<style scoped>
hr {margin:.8em 0;}
select, input[type=text] {border:1px solid #333; appearance:initial; color:#fff;}
</style>>

<script>
import { mapState } from 'vuex'
import ChildHeader from '~/components/common/childHeader.vue'
export default {
  components: {
    ChildHeader
  },
  computed: {

  },

  data(){
    return {
        //기본 값 정의 필요
        textfield1: '222',
        checkedNames: [],
        checkedStatus: null,
        radioNames: [],
        selected: null,
        textfield2: null,
    }
  },

  mounted () {
    document.querySelector('#navItem1').classList.add('v-list-item--active');
  }
}
</script>
