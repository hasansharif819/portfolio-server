export type TCategory = 'frontend' | 'backend';

export type TSkills = {
  name: string;
  progress: number;
  category: TCategory;
  img: string;
  isDeleted: boolean;
};
