export interface ApiResponse {
  data: DataItem[];
  total: number;
  pagination: Pagination;
}

export interface DataItem {
  id: string;
  creatorId: string;
  workspaceId: string;
  parentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  isDemo: boolean | null;
  hierarchyUpdatedAt: string;
  hasCurrentUser: boolean;
  pos: number;
  ancestors: Ancestor[];
  thumbnails: string[];
  thumbnail: string;
  permissions: Permissions;
  customFields: any[]; // Replace 'any' with a more specific type if possible
}

export interface Ancestor {
  id: string;
  title: string;
}

export interface Permissions {
  canViewClips: boolean;
  canContribute: boolean;
  canDownloadClips: boolean;
  canContributeAnon: boolean;
  canDiscuss: boolean;
  canViewAssetVersions: boolean;
  canEditCustomFields: boolean;
  canEditFormAssets: boolean;
}

export interface Pagination {
  hasMore: boolean;
  cursor: string | null;
}
