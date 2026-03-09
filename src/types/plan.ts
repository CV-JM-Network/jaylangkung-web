export interface ResidentialPlan {
  id: number;
  name: string;
  slug: string;
  currentPrice: number;
  originalPrice: number | null;
  downloadSpeedMbps: number;
  uploadSpeedMbps: number;
  description: string | null;
  isPopular: boolean;
  displayOrder: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ResidentialPlanResponse {
  success: boolean;
  data: ResidentialPlan[];
  error?: string;
}
