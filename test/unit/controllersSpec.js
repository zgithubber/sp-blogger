/*describe('PostController Test\n', function () {
beforeEach(module('spBlogger.posts.controllers'));
beforeEach(module('spBlogger.posts.services'));
it('Should initialize controller with 4 posts', inject(function ($rootScope, $controller, postService) {
var $scope = $rootScope.$new();
$controller('PostController', {
$scope : $scope,
postService : postService
});
expect($scope.posts.length).toBe(4);
}));
});
describe('PostDetailsController Test\n', function () {
beforeEach(module('spBlogger.posts.controllers'));
beforeEach(module('ui.router'));
beforeEach(module('spBlogger.posts.services'));
it('Should initialize controller with 1 post', inject(function ($state, $stateParams, $rootScope, $controller, postService) {
var $scope = $rootScope.$new();
$stateParams.id = 2;
$controller('PostDetailsController', {
$scope : $scope,
$stateParams : $stateParams,
$state : $state,
postService : postService
});
expect($scope.singlePost).not.toBe(undefined);
}));
});
 */

beforeEach(module('spBlogger.posts.controllers'));
beforeEach(module('spBlogger.posts.services'));
beforeEach(module('spBlogger.admin.services'));
beforeEach(module('ngResource'));
beforeEach(module('ui.router'));
describe('PostController Test\n', function () {
	var $httpBackend;
	beforeEach(inject(function (_$httpBackend_) {
			$httpBackend = _$httpBackend_; //store fake $httpBackend in a variable
			$httpBackend.expectGET('http://spblogger-sitepointdemos.rhcloud.com/api/posts').respond([{
						title : 'Test',
						_id : 1
					}, {
						title : 'Test2',
						_id : 2
					}
				]); //respond with 2 post objects
		}));
	it('Should initialize controller with 2 posts', inject(function ($rootScope, $controller, Post) {
			var $scope = $rootScope.$new(); //create a new scope
			$controller('PostController', {
				$scope : $scope,
				Post : Post
			}); //instantiate controller
			$httpBackend.flush(); // flush so that responses are actually sent
			expect($scope.posts.length).toBe(2); // Now we should have 2 post objects in model
		}));
});

describe('PostDetailsController Test\n', function () {
	var $httpBackend;
	beforeEach(inject(function (_$httpBackend_) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('http://spblogger-sitepointdemos.rhcloud.com/api/posts/2').respond({
				title : 'Test2',
				_id : 2
			}); //respond with a single object
		}));
	it('Should initialize controller with 1 post', inject(function ($state, $stateParams, $rootScope, $controller, Post) {
			var $scope = $rootScope.$new();
			$stateParams.id = 2;
			$controller('PostDetailsController', {
				$scope : $scope,
				$stateParams : $stateParams,
				$state : $state,
				Post : Post
			});
			$httpBackend.flush(); // flush so that responses are actually sent
			expect($scope.singlePost).not.toBe(undefined); //make sure the model is initialized
		}));
});
