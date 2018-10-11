<template>
  <div>
    <jumbotron></jumbotron>
    <div class="container-fluid">
    <b-list-group id="whatever">
      <note v-for="note in $store.state.notes" v-bind:title="note.title" v-bind:subtitle="note.subtitle" v-bind:message="note.message" v-bind:extras="note.extras"></note>
    </b-list-group>
      <div>
    <note-input></note-input>
      </div>
    </div>
  </div>
</template>

<script>
    import Note from './Note'
    import Input from './Input'
    import Jumbotron from './Jumbotron'
    export default {
        name: "NoterMain",
        components: {
          'note': Note,
          'note-input': Input,
          'jumbotron': Jumbotron
        }
    }
</script>

<style scoped>
#whatever {
  margin-left: 400px;
  margin-right: 400px;
}
</style>
