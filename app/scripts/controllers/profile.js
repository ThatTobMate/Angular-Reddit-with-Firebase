
app.controller('ProfileCtrl', function ($scope, $routeParams, Profile) {
  var uid = $routeParams.userId;

  $scope.profile = Profile.get(uid);
  console.log($scope.profile)
  Profile.getPosts(uid).then(function(posts) {
    $scope.posts = posts;
    console.log($scope.posts)
  });
});