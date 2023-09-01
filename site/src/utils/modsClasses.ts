const modsClasses = (styles: Record<string, string>, mods: Record<string, string>) =>
  Object.keys(mods).map((key) => {
    const value = mods[key]
    return styles[`${key}-${value}`]
  })

export default modsClasses
