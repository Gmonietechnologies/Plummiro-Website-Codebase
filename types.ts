
export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface Project {
  title: string;
  category: string;
  image: string;
}
