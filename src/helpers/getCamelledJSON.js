import _ from "lodash"

const getCamelledJSON = data => {
  return _.mapKeys(data, (v, k) => _.camelCase(k))
}

export default getCamelledJSON
