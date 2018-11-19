const globals = {
  '@angular/core': 'ng.core',
  '@angular/common/http': 'ng.common.http',
  'rxjs': 'rxjs',
  'rxjs/operators': 'rxjs.operators'
};

export default {
  input: './src/in-mem/index.js',
  file: './bundles/in-memory-web-api.umd.js',
  format: 'umd',
  name: 'ng.inMemoryWebApi',
  sourcemap: true,
  globals,
  external: Object.keys(globals)
}
