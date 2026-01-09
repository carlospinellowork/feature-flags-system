export type Environment = "development" | "production" | "staging";

export type FeatureFlag = {
  key: string;
  name: string;
  description?: string;
  enabled: boolean;
  rolloutPercentage?: number;
  environments: Environment[];
}