export const PaginationHelper = (resultsPerPage: number, currentPage: number, totalRequest: number) => {
    let startingPoint = (currentPage - 1) * resultsPerPage + 1;
    let endPoint = startingPoint + resultsPerPage - 1;
    let stringValue = '';
 
    //initial start point
    if (startingPoint === 0) {
      startingPoint = 1
    }
    //if total request is zero
    if (totalRequest === 0) {
      startingPoint = 0
      endPoint = 0
    }
  
    if (endPoint > totalRequest) {
      endPoint = totalRequest
    }
    stringValue = `${startingPoint} - ${endPoint} of ${totalRequest}`;
    return stringValue
  }
  