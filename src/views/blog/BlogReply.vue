<template>
 <!-- Reply section -->
<section class="container my-5">

  <!-- Leave a reply -->
  <div class="card-header border-0 font-weight-bold">Leave a reply</div>

  <!-- Default form reply -->
  <form class="px-1 mt-4">

    <!-- Comment -->
    <div class="form-group">
      <label for="replyFormComment">Your comment:</label>
      <textarea class="form-control" id="replyFormComment" rows="5"></textarea>
    </div>

    <!-- Name -->
    <label for="replyFormName">Your name:</label>
    <input type="email" id="replyFormName" class="form-control">

    <br>

    <!-- Email -->
    <label for="replyFormEmail">Your e-mail:</label>
    <input type="email" id="replyFormEmail" class="form-control">

    <div class="text-center mt-4">
      <button class="btn btn-primary btn-md" type="submit">Post</button>
    </div>

  </form>
  <!-- Default form reply -->

</section>
<!-- Reply section -->

  <!-- Reply section (logged in user) -->
<section class="container my-5">

  <div class="card-header border-0 font-weight-bold">Leave a reply (logged in user)</div>

  <div class="d-md-flex flex-md-fill mt-4 px-1">
    <div class="d-flex justify-content-center mr-md-5">
      <img class="card-img-100 z-depth-1 mb-4" src="https://mdbootstrap.com/img/Photos/Avatars/img (32).jpg"
        alt="avatar">
    </div>
    <textarea class="form-control pl-3 pt-3" id="exampleFormControlTextarea1" rows="6" placeholder="Write something here..."></textarea>
  </div>
  <div class="text-center mt-4">
    <button class="btn btn-primary btn-md">Submit</button>
  </div>

</section>
<!-- Reply section (logged in user) -->
</template>

<script>
export default {
    name: "BlogReply"
}
</script>

<style>

</style>