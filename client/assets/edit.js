$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);

  console.log(urlParams.get("id"));

  //   $.ajax({
  //   type: "POST",
  //   url: "/api",
  // }).then((allTodos) => {
  //   console.log(allTodos);
  //   renderTodos(allTodos);
  // });
});
$(document).on("click", "#btnCancel", function () {
  const todoId = $(this).attr("data-id");
  window.location.href = `/`;
});

$(document).on("click", "#btnEdit", function () {
  const todoId = $(this).attr("data-id");
  window.location.href = `/edit?id=${todoId}`;
});
