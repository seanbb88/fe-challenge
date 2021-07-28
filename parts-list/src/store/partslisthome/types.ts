export interface PartsListHomeState {
    partsListModel: PartsListModel,
  }
  
export interface PartsListModel {
    partsList: PartDetailsModel[], 
    currentPage: number, 
    totalCount: number,
    currentApiPage: number, 
    isLoading: boolean, 
    errorText: string
}

export interface PartDetailsModel {
    id: string, 
    part_file: PartFileModel,
    quantity: string, 
}

export interface PartFileModel {
    file_name: string, 
    id: string, 
    units: string
}