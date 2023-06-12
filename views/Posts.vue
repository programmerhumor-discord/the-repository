<script setup>
import Loading from "../components/Loading.vue";
import data from "../assets/scripts/data";
</script>

<script>
export default {
  props: ["subreddit"],
  methods: {
    init() {
      this.status = "loading";
      data.fetch(this.subreddit).then((res) => {
        if (res.includes("Sorry, there aren’t any communities on Reddit with that name.")) {
          this.status = "This community does not exist. 🌌";
        } else if (res.includes("has been banned from Reddit")) {
          this.status = "This community has been banned from Reddit. ☠";
        } else if (res.includes("About Community")) {
          this.posts = data.getPosts(res);
          this.status = "operational";
        } else {
          this.status = "This is a private community. 🔒";
        }
      })
    }
  },
  beforeMount() {
    this.init();
  },
  watch: {
    subreddit: function (val) {
      this.init();
    }
  },
  data() {
    return {
      status: "loading",
      posts: []
    }
  }
}

</script>
<template>
  <div v-if="status === 'loading'">
    <Loading />
  </div>
  <div v-else-if="status === 'operational'" class="parent">
    <div v-for="post in posts" class="content">
      <div v-on:click="$event => $router.push('Home')" class="post-container">
        <h2>{{ post.title }}</h2>
        <div v-if="post.type === 'img'">
          <img :src="post.src">
        </div>
        <div v-else>
          <video>
            <source :src="post.src">
          </video>
        </div>
      </div>
    </div>
  </div>
  <div class="status-center" v-else>
    <h1>{{ status }}</h1>
  </div>
</template>
<style>
h1, h2 {
  color: rgb(184, 219, 247);
  font-weight: lighter;
}
h2 {
  text-align: center;
}
.status-center {
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.post-container {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  max-width: 60%;
  min-width: 700px;
  margin: 20px;
  width: 100%;
  padding: 0px 10px;
  border-image: linear-gradient(rgb(207, 81, 149), rgb(39, 133, 192)) 30;
  border-width: 2px;
  border-style: solid;
}
.post-container > div {
  display: flex;
  justify-content: center;
}
.content {
  display: flex;
  justify-content: center;
}
</style>