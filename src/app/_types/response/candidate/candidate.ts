export interface CandidateListResponse {
  content: CandidateItem[];
  pageable: {
    sort: CandidateSortProperty;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: CandidateSortProperty;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface CandidateItem {
  id: number;
  name: string;
  profileUrl: string;
  voteCnt: string;
}

interface CandidateSortProperty {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface CandidateDetailResponse {
  id: number;
  candidateNumber: number;
  name: string;
  country: string;
  education: string;
  major: string;
  hobby: string;
  talent: string;
  ambition: string;
  contents: string;
  profileInfoList: CandidateProfileInfo[];
  regDt: string;
  voted: boolean;
}

export interface CandidateProfileInfo {
  fileArea: number;
  displayOrder: number;
  profileUrl: string;
  mimeType: string;
}

export type VotedCandidateIdsResponse = number[];
