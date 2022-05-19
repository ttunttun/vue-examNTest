<template>
  <section>
    <v-card class="mx-auto" max-width="500">
      <v-toolbar
        color="green"
        dark
      >
        <v-toolbar-title>책 예제 따라하기</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-group
          v-for="(item, i) in items"
          :key="i"
          v-model="item.active"
          :prepend-icon="item.icon"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </template>
          <v-list-group
            v-for="chapter in item.chapter"
            :key="item.title"
            v-model="chapter.active"
            :prepend-icon="chapter.icon"
            sub-group
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="chapter.title"></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="exam in chapter.exam"
              :key="chapter.title"
              :to="exam.to"
            >
             <v-list-item-icon>
                <v-icon v-text="exam.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-title v-text="exam.title"></v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-card>
  </section>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      items: [
        {
          icon:'mdi-notebook',
          title: '투입 일주일 전',
          chapter: [
            {
              title:'Chapter 5장',
              exam: [
                {
                  icon: 'mdi-link',
                  title: '5-3',
                  to: '/book/week/5-3'
                },
                {
                  icon: 'mdi-link',
                  title: '5-4',
                  to: '/book/week/5-4'
                },
                {
                  icon: 'mdi-link',
                  title: '5-5',
                  to: '/book/week/5-5'
                }
              ]
            }, 
            {
              title:'Chapter 6장',
              exam: [
                {
                  icon: 'mdi-link',
                  title: '6-1',
                  to: '/book/week/6-1'
                }
              ]
            }
          ]
        },
        {
          icon:'mdi-notebook',
          title: '한권으로 배우는 Vue.js',
          chapter: [
            {
              title:'4-1',
              to: '/book/4-1'
            }
          ]
        }
      ],
    }
  },
}
</script>