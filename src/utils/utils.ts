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