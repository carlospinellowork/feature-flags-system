'use client'

import { useFeatureFlagsContext } from "../context/FeatureFlagsContext"
import { FeatureFlag } from "../types"

type Props = {
  flag: FeatureFlag
}

export function FeatureFlagsCard({ flag }: Props) {
  const {toggleFlag, updateRollout } = useFeatureFlagsContext()
  return (
    <div
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: 8,
        padding: 16,
      }}
    >
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <strong>{flag.name}</strong>
          <p style={{ fontSize: 12, opacity: 0.7 }}>{flag.key}</p>
        </div>

        <label>
          <input
            type="checkbox"
            checked={flag.enabled}
            onChange={() => toggleFlag(flag.key)}
          />{" "}
          Enabled
        </label>
      </header>

      {flag.description && (
        <p style={{ marginTop: 8 }}>{flag.description}</p>
      )}

      <div style={{ marginTop: 12 }}>
        <label>
          Rollout: {flag.rolloutPercentage}%
        </label>
        <input
          type="range"
          min={0}
          max={100}
          value={flag.rolloutPercentage}
          onChange={(e) =>
            updateRollout(flag.key, Number(e.target.value))
          }
        />
      </div>
    </div>
  )
}