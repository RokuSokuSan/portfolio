<template>
 <!-- Jumbotron -->
<div class="jumbotron p-0">

  <!-- Card image -->
  <div class="view overlay rounded-top">
    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg" class="img-fluid" alt="Sample image">
    <a href="#">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

  <!-- Card content -->
  <div class="card-body text-center mb-3">

    <!-- Title -->
    <h1 class="card-title h1 my-4"><strong>Becoming a Front-end developer.</strong></h1>
    <!-- Text -->
    <p class="card-text py-2">In a troublesome time when people are shouting "The sky is falling and we are of to see the king", </p>
    <p class="card-text">then what could be better than to sit down and educate yourselves for a better you?</p>
    <p class="ml-auto font-italic">~ Anthony Norman esq</p>
    <!-- Button -->
    <blog-post />

  </div>

</div>
<!-- Jumbotron -->
</template>

<script>
import BlogPost from './BlogPost'
export default {
    name: "BlogSplash",
    components: {
        BlogPost
    }
}
</script>

<style>

</style>