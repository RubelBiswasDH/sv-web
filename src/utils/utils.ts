// Sort by value of given key
export function sortByValue(data: any, key: any) {
  if (!data || data?.length <= 0 || !key) {
      return []
  }
  return data?.sort((a: any, b: any) => {
  
    if (a[key] > b[key]) {
      return -1;
    }
    if (a[key] < b[key]) {
      return 1;
    }
    return 0;
  })
}

// Convert hex to rgb with opacity
export function hexToRgb(hex: any, opacity: any) {
  hex = hex.replace(/^#/, '');

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  opacity = Math.min(1, Math.max(0, opacity));

  const rgbaColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;

  return rgbaColor;
}