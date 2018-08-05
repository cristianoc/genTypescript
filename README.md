# genTypescript

Explore typescript support for [genFlow](https://github.com/cristianoc/genFlow).

There's a sample project [sample-typescript-app](sample-typescript-app) created with:
```
create-react-app sample-typescript-app --scripts-version=react-scripts-ts
```

The project was extended by adding a ReasonReact component [ReasonComponent.re](sample-typescript-app/src/ReasonComponent.re). The typed wrapper [ReasonComponent.ts](sample-typescript-app/src/ReasonComponent.ts) is generated automatically by genFlow. (Currently, this requires patching up genFlow with [EmitTyp.re](sample-typescript-app/EmitTyp.re)).

The linter needs to be taught to ignore `.bs.js` files, see [tslint.json](sample-typescript-app/tslint.json).
