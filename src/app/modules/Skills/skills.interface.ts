export type TCategory = 'frontend' | 'backend';

export type TSkills = {
  id: string;
  name: string;
  progress: number;
  category: TCategory;
  img?: string;
  isDeleted: boolean;
};
