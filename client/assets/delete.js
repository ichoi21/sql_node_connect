$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);

  console.log(urlParams.get("id"));
});

// $(document).ready(function () {
//   $.ajax({
//     type: "POST",
//     url: "/api",
//   }).then((allTodos) => {
//     console.log(allTodos);
//     renderTodos(allTodos);
//   });
// });
