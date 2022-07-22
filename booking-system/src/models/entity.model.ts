export interface EntityModel {
  id: number;
  name: string;
  description: string;
  jsonOptions: Record<any, any>;
  type: string;
  enabled: boolean;
}

export interface EntityCreateModel {
  name: string;
  description: string;
  type: string;
}
