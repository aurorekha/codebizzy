module.exports = function(grunt) { 
	
	grunt.initConfig({ pkg: grunt.file.readJSON('package.json'), 
		
		sass: {
		options: {
			paths: 'css/less',
			yuicompress: true
			},
			files: {
			'style.css': 'css/styles.sass'
			}
		}
		
		watch: {
			sass: {
			files: 'css/*.sass',
			tasks: 'sass'
			}
		}
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
}