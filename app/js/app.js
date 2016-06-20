'use strict'

angular.module('spBlogger', ['pascalprecht.translate', 'ngAnimate', 'ngResource', 'ui.router', 'spBlogger.admin', 'spBlogger.posts', 'spBlogger.controllers', 'spBlogger.directives', 'spBlogger.filters', 'spBlogger.services']);

angular.module('spBlogger').value('version', 'V1.0');

/* angular.module('spBlogger').run(['$state', function ($state) {

			$state.go('admin.postViewAll');

		}
	]); */

angular.module('spBlogger').run(['$state', '$rootScope', '$translate', function ($state, $rootScope, $translate) {
			$state.go('allPosts');
			$rootScope.languagePreference = {
				currentLanguage : 'en'
			};
			$rootScope.languagePreference.switchLanguage = function (key) {
				$translate.use(key);
				$rootScope.languagePreference.currentLanguage = key;
			}
		}
	]);

angular.module('spBlogger').config(['$translateProvider', function ($translateProvider) {
			$translateProvider.translations('en', {
				TITLE : 'The Single Page Blogger',
				SUBTITLE : 'One Stop Blogging Solution',
				COMMENTS : 'Comments',
				BY : 'By',
				ADD : 'Add'
			});
			$translateProvider.translations('de', {
				TITLE : 'The Single Page Blogger',
				SUBTITLE : 'Die Komplettlösung für Ihr Blog',
				COMMENTS : 'Kommentare',
				BY : 'Von',
				ADD : 'Hinzufügen'
			});
			$translateProvider.translations('it', {
				TITLE : 'The Single Page Blogger',
				SUBTITLE : 'Una soluzione di blogging',
				COMMENTS : 'Commenti',
				BY : 'Da',
				ADD : 'Commenta'
			});
			$translateProvider.preferredLanguage('en');
		}
	]);
