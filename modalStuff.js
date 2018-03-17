
<div class="collapse navbar-collapse" id="navbarText">

        <ul class="navbar-nav ml-auto">

            <li class="nav-item">

                <span class="fa-stack fa-lg">

            <i class="fa fa-square-o fa-stack-2x"></i>

            <i class="fa fa-heart fa-stack-1x" aria-hidden="true" data-toggle="modal" data-target="#exampleModal"></i>

            </span>

            </li>

        </ul>
   </div>


//============================================================================================


<!-- Modal Div Code-->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Tell Us What You Think!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="user_name" class="col-form-label">Your Name</label>
            <input type="text" class="form-control" id="user_name">
          </div>
          <div class="form-group">
            <label for="feedback_text" class="col-form-label">Feedback:</label>
            <textarea class="form-control" id="feedback_text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>