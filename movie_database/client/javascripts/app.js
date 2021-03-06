angular.module('nodeTodo', [])
.controller('mainController', ($scope, $http) => {
  $scope.formData = {};
  $scope.todoData = {};
  // Get all todos
  $http.get('/api/v1/todos')
  .success((data) => {
    $scope.todoData = data;
    console.log(data);
  })
  .error((error) => {
    console.log('Error: ' + error);
  });
  // Create a new todo
  $scope.createTodo = () => {
    $http.get('/api/v1/todos')
  .success((data) => {
    $scope.todoData = data;
    console.log(data);
  })
  .error((error) => {
    console.log('Error: ' + error);
  });
  };
  // Delete a todo
  // $scope.deleteTodo = (todoID) => {
  //   $http.delete('/api/v1/todos/' + todoID)
  //   .success((data) => {
  //     $scope.todoData = data;
  //     console.log(data);
  //   })
  //   .error((data) => {
  //     console.log('Error: ' + data);
  //   });
  // };
});
