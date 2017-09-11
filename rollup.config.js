export default {
  input: './src/in-mem/index.js',
  // output: { ... does not work! Why?
    file: './bundles/in-memory-web-api.umd.js',
    format: 'umd',
    name: 'ng.inMemoryWebApi',
    sourcemap: true,
    globals: {
      '@angular/core': 'ng.core',
      '@angular/http': 'ng.http',
      '@angular/common/http': 'ng.common.http',
      'rxjs/BehaviorSubject': 'Rx',
      'rxjs/Observable': 'Rx',
      'rxjs/add/operator/delay': 'Rx',
      'rxjs/observable/of': 'Rx',
      'rxjs/observable/fromPromise': 'Rx',
      'rxjs/util/isPromise': 'Rx',
      'rxjs/operator/concatMap': 'Rx',
      'rxjs/operator/delay': 'Rx',
      'rxjs/operator/filter': 'Rx',
      'rxjs/operator/first': 'Rx',
      'rxjs/operator/map': 'Rx'
    }
  // }
}
