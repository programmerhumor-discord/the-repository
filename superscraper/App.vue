<script setup>
import { RouterLink, RouterView } from 'vue-router'
import "./assets/css/nav.css"
import "./assets/css/main.css"
</script>

<script>
export default {
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.currentSub = e.target.innerText.replace(/\n/g, '');
      localStorage.setItem("currentSub", this.currentSub);
    }
  },
  data() {
    return {
      currentSub: localStorage.getItem("currentSub") !== null ? localStorage.getItem("currentSub") : "help"
    }
  },
  components: {
    RouterView
  }
}
</script>

<template>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <p>r/</p><p spellcheck="false" id="subreddit" @keydown.enter="onSubmit" contenteditable="true">{{ currentSub }}</p>
  </nav>

  <RouterView :subreddit="this.currentSub" />
</template>