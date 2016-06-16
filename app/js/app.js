'use strict'

angular.module('spBlogger', ['ngAnimate', 'ngResource', 'ui.router', 'spBlogger.admin', 'spBlogger.posts', 'spBlogger.controllers', 'spBlogger.directives', 'spBlogger.filters', 'spBlogger.services']);

angular.module('spBlogger').value('version', 'V1.0');

angular.module('spBlogger').run(['$state', function ($state) {

			$state.go('admin.postViewAll');

		}
	]);
