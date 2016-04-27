'use strict'

angular.module('spBlogger',['ui.router','spBlogger.posts','spBlogger.controllers','spBlogger.directives','spBlogger.filters','spBlogger.services']);


angular.module('spBlogger').run(['$state',function($state){

      $state.go('allPosts');
	  
}]);