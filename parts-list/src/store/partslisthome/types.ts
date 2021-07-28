export interface PartsListHomeState {
    partsListHome: PartsListHomeModel,
    updatedQuantityModel: UpdatePartsQuantityModel
  }

  export interface UpdatePartsQuantityModel {
    id: number, 
    quantity: number, 
    partName: string
}

export interface PartsListHomeModel {
    partsList: PartListModel[], 
    pageSize: number,
    currentPage: number, 
    totalCount: number,   
    isLoading: boolean, 
    errorText: string
}

export interface PartListModel {
    id: number, 
    part_file: PartFileModel,
    quantity: string, 
}

export interface PartFileModel {
    file_name: string, 
    id: number, 
    units: string
}


export interface PartsListResponse {
    partsList: PartListModel[], 
    totalCount: number, 
    pageSize: number, 
    currentPage: number
}