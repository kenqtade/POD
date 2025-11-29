export interface Odyssey {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  progress: number;
  waypoints: number;
  totalWaypoints: number;
  author: User;
  tags?: string[];
  updatedAt: string;
  likes?: number;
  views?: number;
  forks?: number;
  isPublished?: boolean;
}

export interface User {
  name: string;
  handle: string;
  avatar: string;
}

export interface Waypoint {
  id: string;
  title: string;
  prompt: string;
  notes?: string;
  previewImage?: string;
  position: { x: number; y: number };
  type: 'start' | 'default' | 'branch';
}

export interface Template {
  id: string;
  title: string;
  author: User;
  thumbnail: string;
  views: number;
  likes: number;
  forks: number;
}
