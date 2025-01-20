
export interface Post {
  id: string;
  email: string;
  condition: string;
  firstName: string | null;
  lastName: string | null;
  onboarded: boolean;
  photos: string[];
  location: string;
  contactInfo: string;
  userId?: string;
  interests?: string;
  user?: string;
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


