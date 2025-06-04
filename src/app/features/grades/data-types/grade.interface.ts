export interface GradeDTO {
  id: string;
  descriptiveGrade: string;
  minPercentage: number;
  symbolicGrade: string;
}

export interface GradeTSend {
  id?: string;
  descriptiveGrade?: string | null;
  minPercentage: number | null;
  symbolicGrade: string | null;
}

export interface Grade extends GradeDTO {
  maxPercentage: number;
}
