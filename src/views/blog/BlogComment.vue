<template>
<!--Section: Comments-->
<section class="container my-5">

  <!-- Card header -->
  <div class="card-header border-0 font-weight-bold">4 comments</div>

  <div class="media d-block d-md-flex mt-4">
    <img class="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg"
      alt="Generic placeholder image">
    <div class="media-body text-center text-md-left ml-md-3 ml-0">
      <h5 class="font-weight-bold mt-0">
        <a href="">Miley Steward</a>
        <a href="" class="pull-right">
          <i class="fas fa-reply"></i>
        </a>
      </h5>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <div class="media d-block d-md-flex mt-4">
        <img class="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg"
          alt="Generic placeholder image">
        <div class="media-body text-center text-md-left ml-md-3 ml-0">
          <h5 class="font-weight-bold mt-0">
            <a href="">Tommy Smith</a>
            <a href="" class="pull-right">
              <i class="fas fa-reply"></i>
            </a>
          </h5>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </div>
      </div>

      <!-- Quick Reply -->
      <div class="form-group mt-4">
        <label for="quickReplyFormComment">Your comment</label>
        <textarea class="form-control" id="quickReplyFormComment" rows="5"></textarea>

        <div class="text-center my-4">
          <button class="btn btn-primary btn-sm" type="submit">Post</button>
        </div>
      </div>

      <div class="media d-block d-md-flex mt-3">
        <img class="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (21).jpg"
          alt="Generic placeholder image">
        <div class="media-body text-center text-md-left ml-md-3 ml-0">
          <h5 class="font-weight-bold mt-0">
            <a href="">Sylvester the Cat</a>
            <a href="" class="pull-right">
              <i class="fas fa-reply"></i>
            </a>
          </h5>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </div>
      </div>
    </div>
  </div>
  <div class="media d-block d-md-flex mt-3">
    <img class="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg"
      alt="Generic placeholder image">
    <div class="media-body text-center text-md-left ml-md-3 ml-0">
      <h5 class="font-weight-bold mt-0">
        <a href="">Caroline Horwitz</a>
        <a href="" class="pull-right">
          <i class="fas fa-reply"></i>
        </a>
      </h5>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
      atque corrupti
      quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
      officia deserunt mollitia animi, id est laborum et dolorum fuga.
    </div>
  </div>

  <!--Pagination -->
  <nav class="d-flex justify-content-center mt-5">
    <ul class="pagination pg-blue mb-0">

      <!--First-->
      <li class="page-item disabled">
        <a class="page-link">First</a>
      </li>

      <!--Arrow left-->
      <li class="page-item disabled">
        <a class="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>

      <!--Numbers-->
      <li class="page-item active">
        <a class="page-link">1</a>
      </li>
      <li class="page-item">
        <a class="page-link">2</a>
      </li>
      <li class="page-item">
        <a class="page-link">3</a>
      </li>
      <li class="page-item">
        <a class="page-link">4</a>
      </li>
      <li class="page-item">
        <a class="page-link">5</a>
      </li>

      <!--Arrow right-->
      <li class="page-item">
        <a class="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>

      <!--Last-->
      <li class="page-item">
        <a class="page-link">Last</a>
      </li>

    </ul>
  </nav>
  <!--Pagination -->

</section>
<!--Section: Comments-->
</template>

<script>
export default {
    name: 'BlogComment'
}
</script>

<style>

</style>