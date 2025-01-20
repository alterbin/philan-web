
export interface Post {
  id: string;
  email: string;
  condition: string;
  firstName: string | null;
  lastName: string | null;
  photos: string[];
  location: string;
  contactInfo: string;
  userId?: string;
  interests?: string;
  user?: string;
}

export type CreatePostBody = {
  email: string;
  condition: string;
  firstName: string;
  lastName: string;
  photos: string[];
  location: string;
  contactInfo: string;
}
export interface Posts {
  data: Post[];
  total: number;
}

export interface ReadRequest {
  page?: number;
  order?: string;
  take?: number;
  searchTerm?: string | string[] | undefined;
}


