'use client'

import { useFeatureFlagsContext } from "../context/FeatureFlagsContext"
import { FeatureFlagsCard } from "./FeatureFlagsCard"

export function FeatureFlagsList() {
const { flags} = useFeatureFlagsContext()

if (flags.length === 0) return <p>Nenhuma feature flag encontrada</p>

    return (
        <div>
            <h1>Listagem de Feature Flags</h1>
            {flags.map((flag) => {
              return <FeatureFlagsCard key={flag.key} flag={flag} />
            })}
        </div>
    )
}