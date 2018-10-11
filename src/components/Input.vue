<template>
  <div>
  <vs-input class="inputx" placeholder="Title" v-model="note.title"/>
  <vs-input class="inputx" placeholder="Subtitle" v-model="note.subtitle"/>
  <vs-input class="inputx" placeholder="Note" v-model="note.message" @keyup.enter="pushToStore"/>
    <vs-input class="inputx" placeholder="Extra info" v-model="note.extras" @keyup.enter="pushToStore"/>

  </div>
</template>

<script>
    export default {
        name: "Input",
        data () {
          return {
            note: {
              title: '',
              subtitle: '',
              message: '',
              extras: ''
            }
          }
        },
        methods: {
          pushToStore () {

            if (this.note.message !== '') {
              this.$store.commit('addNote', this.note)
              this.note = { // Reset note
                title: this.$store.state.notes[this.$store.state.currentIndex].title,
                subtitle: this.$store.state.notes[this.$store.state.currentIndex].subtitle,
                message: '',
                extras: ''
              }
            }
          }
        }
    }
</script>

<style scoped>

</style>
