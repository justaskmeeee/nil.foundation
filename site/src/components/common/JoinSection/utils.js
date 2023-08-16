export const getJoinSectionProps = (data) => {
  const props = data?.joinNil ?? {}
  return {
    ...props,
    leftText: props?.content?.left ?? '',
    rightText: props?.content?.right ?? '',
  }
}
