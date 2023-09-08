export const groupArrayByField = <
  T extends Record<string, any>,
  U extends string,
>(array: T[], key: U) => {
  return array.reduce((result, currentValue) => {
    // eslint-disable-next-line no-param-reassign
    ; (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue)
    return result
  }, {} as Record<typeof key, T[]>)
}
