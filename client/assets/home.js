$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "/api",
  }).then((allTodos) => {
    console.log(allTodos);
    renderTodos(allTodos);
  });
});

const renderTodos = (arr) => {
  $("#card-container").html("");
  arr.forEach((todo) => {
    let msg = todo.completed ? "✅ Completed Todo" : "❌ Need to do!";
    $("#card-container").prepend(
      `
      <div class="card mb-2">
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-muted">
            ${msg}
          </h6>
          <p class="card-text">
            ${todo.text}
          </p>
          <div class="text-center">
            <button id="btnUpdate" data-id=${todo.id} style="width: 150px;" class="btn btn-outline-success">
              Edit
            </button>
            <button id="btnDelete" data-id=${todo.id} style="width: 150px;" class="btn btn-outline-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
      `
    );
  });
};
$(document).on("click", "#btnUpdate", function () {
  const todoId = $(this).attr("data-id");
  window.location.href = `/edit?id=${todoId}`;
});

$(document).on("click", "#btnDelete", function () {
  const todoId = $(this).attr("data-id");
  window.location.href = `/delete?id=${todoId}`;
});
