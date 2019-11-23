declare module "redux-persist-transform-immutable" {
  const immutableTransform: (config?: { records: Array<any> }) => any
  export default immutableTransform
}
