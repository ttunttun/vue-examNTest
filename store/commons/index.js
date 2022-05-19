export const state = () => ({
  subject: '이건 기본값',
  listData: null,
})


export const mutations = { //state를 변경시키는 역할, Mutations 통해서만 state를 변경해야한다. (동기처리)
  setSubject(state, subject) {
      console.log(subject)
      state.subject = subject
  },
  setListData(state, listData){
      state.listData = listData
  }
}

export const actions = { // 주요 목적은 Mutations를 실행시키는 역할 (비동기 처리)
  /* getSubject(state) {
      return state.subject
  } */
  getListData(state, payload){
      return this.$axios.get('test/test.json').then(response => {
          console.log(response)
          if(response.data.success){
              state.commit('setListData', response.data.content) //commit('함수명', '전달인자')
          }
      })
  },
}
