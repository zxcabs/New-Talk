import gulp from "gulp"
import BS from "browser-sync"
import loadPlugins from "gulp-load-plugins"
import webpackStream from "webpack-stream"
import webpack from "webpack"

const $ = loadPlugins()

gulp.task("styles", () => {
  gulp.src("css/**/*.css")
  .pipe($.sourcemaps.init())
  .pipe($.postcss([
    require("postcss-import"),
    require("cssnext")
  ]))
  .pipe($.concat("styles.css"))
  .pipe($.sourcemaps.write())
  .pipe(gulp.dest("./build"))
  .pipe(BS.reload({
    stream: true,
  }))
})

gulp.task("scripts", () => {
  gulp.src("js/**/*.js")
  .pipe(webpackStream({
    entry: {
      scripts: "./js/index.js",
    },
    module: {
      loaders: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /(node_modules)/,
          query: {
            presets: ["es2015", "stage-0"],
          },
        },
      ]
    },
    output: {
      filename: "scripts.js",
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
    ],
    devtool: "source-map",
  }))
  .pipe(gulp.dest("./build"))
  .pipe(BS.reload({
    stream: true,
  }))
})

gulp.task("server", () => {
  BS({
    server: true,
    files: ["./index.html", "build/**/*"],
  })
})

gulp.task("watch", ["styles", "scripts"], () => {
  gulp.watch(["css/**/*.css"], ["styles"])
  gulp.watch(["js/**/*.js"], ["scripts"])
})


gulp.task("default", ["watch", "server"])
