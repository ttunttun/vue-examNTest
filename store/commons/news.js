export const state = () => ({
  listData: null,
})

export const mutations = {
  setSubject(state, subject) {
      console.log(subject)
      state.subject = subject
  },
  setListData(state, listData){
      state.listData = listData
  }
}

export const actions = {
  /* getSubject(state) {
      return state.subject
  } */
  getListData(state, payload){
      return this.$axios.get('samsung/news.json').then(response => {
          console.log(response)
          if(response.data.success){
              state.commit('setListData', response.data.content)
          }
      })
  },
}
