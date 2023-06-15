export interface PersonProfileLink {
  id: string;
  name: string;
  tagsStr: string;
}

export interface PersonProfilePage {
  id: string;
  name: string;
  tagsArr: string[];
  email: string | null;
  links: string[];
}

export interface PersonProfileData {
  id: string;
  name: string;
  tagsStr: string;
  tagsArr: string[];
  email: string | null;
  links: string[];
}
