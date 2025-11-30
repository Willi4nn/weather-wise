const formatVisibility = (visibility: number): string => {
  if (visibility >= 1000) {
    return `${(visibility / 1000).toFixed(1)} km`;
  }
  return `${visibility} m`;
};

export default formatVisibility;
