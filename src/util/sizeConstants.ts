enum Size {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
  Default = ''
}

export const toSize = (str: String): Size => {
  let size = Size.Default;
  switch (str) {
    case Size.Small:
      size = Size.Small;
      break;
    case Size.Medium:
      size = Size.Medium;
      break;
    case Size.Large:
      size = Size.Large;
      break;
  }
  return size;
};

export default Size;
