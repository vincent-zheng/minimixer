var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var addHeader = require('./build/addHeader');

// 设置目标目录
var dist = '<%= dir + "/"%>';

gulp.task('configTest', function () {
    dist = './public/dist/';
});

gulp.task('test', [
    'configTest',
    'build'
], function () {

});

gulp.task('build', function () {
    // rjs({
    // 	baseUrl: "./src",
    // 	paths: {
    // 		// requireLib: 'lib/almond'
    // 	},
    // 	name: 'minijquery',
    // 	out: 'minijquery.js',
    // 	include: [
    // 		// 'requireLib'
    // 	]
    // })
    gulp.src([
        <% for(var key in core) { %>
            <%= '"' + core[key] + '",' %>
        <% };%>
        <% for(var key in modules) { %>
            <% var currentDependencies = []; %>
            <% if (dependencies[modules[key]]) { %>
                <% dependencies[modules[key]].forEach(function (item) { %>
                        <% if (currentDependencies.indexOf(item) === -1) { %>
                                <%= '"' + item + '",' %>
                                <% currentDependencies.push(item); %>
                        <% } %>
                <% }); %>
            <% } %>
            <%= '"' + modules[key] + '",' %>
        <% };%>
    ])
        .pipe(concat('minijQuery.js'))
        .pipe(addHeader(
            '(function(){ "use strict";',
            ';window.$ = minijQuery;})();'
        ))
        .pipe(gulp.dest(dist))
        .pipe(rename('minijQuery.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dist));
});