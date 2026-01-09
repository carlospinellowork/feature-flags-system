import { useFeatureFlagsContext } from "../context/FeatureFlagsContext";

export function useFeatureFlags() {
  const { isEnabled } = useFeatureFlagsContext()

  return {
    isEnabled
  }
    
}