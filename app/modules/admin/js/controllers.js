'use strict'

angular.module('spBlogger.admin.controllers', []).controller('AdminController', ['$scope', function ($scope) {}

	]).controller('PostCreationController', ['$scope', '$state', 'Post', function ($scope, $state, Post,permalinkFilter) {
			$scope.post = new Post(); // Create an empty Post instance
			$scope.buttonText = "Create"; // Set initial label for button
			$scope.savePost = function () {
				$scope.buttonText = "Saving. . ."; //Once clicked change button text
				$scope.post.permalink = permalinkFilter($scope.post.title); //generate permalink
				$scope.post.$save(function () {
					$state.go('admin.postViewAll'); //Once saved go to state `admin.postViewAll`
				});
			}
		}
	]).controller('PostUpdateController', ['$scope', 'Post', '$stateParams', '$state', function ($scope, Post, $stateParams, $state) {
			$scope.post = Post.get({
					id : $stateParams.id
				}); //Obtain the Post from backend. Search by Id
			$scope.buttonText = "Update"; //Set initial label for button
			$scope.updatePost = function () {
				$scope.buttonText = "Updating. . ."; //Once clicked change button text.controller('PostListController', ['$scope', function ($scope) {}
				$scope.post.$update(function () {
					$state.go('admin.postViewAll'); //Once updated go to state `admin.postViewAll`
				});
			}
		}
	]).controller('PostListController', ['$scope', 'Post', 'popupService', '$state', function ($scope, Post, popupService, $state) {
			$scope.posts = Post.query(); // Obtain all the posts from backend
			$scope.deletePost = function (post) {
				if (popupService.showPopup('Really delete this?')) { // Ask for confirmation
					post.$delete(function () {
						$state.go('admin.postViewAll', undefined, { //once deleted reload the state
							reload : true
						});
					});
				}
			}
		}
	]);
