'use strict';
var gulp = require('gulp');
var rename = require('gulp-rename');
var handlebars = require('gulp-compile-handlebars')

//Loads the translations
var translations = {};
translations.ca = require('../../src/translations/web-ca.json');
translations['es-ES'] = require('../../src/translations/web-es-ES.json');
translations['en-US'] = require('../../src/translations/web-en-US.json');

gulp.task('build-en', function () {
    const templateData = {
        lang: 'en',
        translations: translations['en-US']
    }
    const options = {
        compile: {
            defaultLayout: 'web'
        }
    }

    return gulp.src('src/views/home.handlebars')
        .pipe(handlebars(templateData, options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(''));
});

gulp.task('build-ca', function () {
    const templateData = {
        lang: 'ca',
        translations: translations['ca']
    }
    const options = {
        compile: {
            defaultLayout: 'web'
        }
    }

    return gulp.src('src/views/home.handlebars')
        .pipe(handlebars(templateData, options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('ca'));
});

gulp.task('build-es', function () {
    const templateData = {
        lang: 'es',
        translations: translations['es-ES']
    }
    const options = {
        compile: {
            defaultLayout: 'web'
        }
    }

    return gulp.src('src/views/home.handlebars')
        .pipe(handlebars(templateData, options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('es-ES'));
});

