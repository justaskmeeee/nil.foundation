export const groupArrayByField = <T extends unknown>(array: T[], key: string) => {
  return array.reduce((result, currentValue) => {
    // eslint-disable-next-line no-param-reassign
    ;(result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue)
    return result
  }, {})
}
