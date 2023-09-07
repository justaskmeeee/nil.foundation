export const groupArrayByField = <
  T extends Record<string, any>,
>(array: T[], key: keyof T) => {
  return array.reduce((result, currentValue) => {
    // eslint-disable-next-line no-param-reassign
    ; (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue)
    return result
  }, {} as Record<string, T[]>)
}
