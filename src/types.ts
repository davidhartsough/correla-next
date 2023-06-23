export interface PersonProfileLink {
  id: string;
  name: string;
  tagsStr: string;
}

export interface PersonProfileInfo {
  name: string;
  tagsArr: string[];
  email: string | null;
  links: string[];
}

export interface PersonProfilePage extends PersonProfileInfo {
  id: string;
}

export interface PersonProfileData extends PersonProfileInfo {
  id: string;
  tagsStr: string;
}
