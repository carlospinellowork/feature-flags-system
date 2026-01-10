'use client'

import {
    createContext,
    useContext,
    useEffect,
    useState
} from 'react'

import { FeatureFlag } from '../types'

const initialFlags: FeatureFlag[] = [
  {
    key: 'new_dashboard',
    name: 'New Dashboard',
    description: 'Enable the new dashboard',
    enabled: false,
    rolloutPercentage: 100,
    environment: 'development'
  }
]

type FeatureFlagsContextType = {
  flags: FeatureFlag[]
  toggleFlag: (flagKey: string) => void
  updateRollout: (flagKey: string, rolloutPercentage: number) => void
  isEnabled: (flagKey: string) => boolean
}

const FeatureFlagsContext = createContext<FeatureFlagsContextType | undefined>(undefined)

export function FeatureFlagsProvider({ children }: { children: React.ReactNode }) {
  const [flags, setFlags] = useState<FeatureFlag[]>(initialFlags)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const storedFlags = localStorage.getItem('featureFlags')
    if (storedFlags) {
      try {
        setFlags(JSON.parse(storedFlags))
      } catch (e) {
        console.error('Error parsing feature flags from localStorage', e)
        setFlags(initialFlags)
      }
    }
  }, [])

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('featureFlags', JSON.stringify(flags))
    }
  }, [flags, isMounted])

  const toggleFlag = (flagKey: string) => {
    setFlags((prevFlags) =>
      prevFlags.map((flag) =>
        flag.key === flagKey ? { ...flag, enabled: !flag.enabled } : flag
      )
    )
  }

  const updateRollout = (flagKey: string, rolloutPercentage: number) => {
    setFlags((prevFlags) =>
      prevFlags.map((flag) =>
        flag.key === flagKey ? { ...flag, rolloutPercentage } : flag
      )
    )
  }

  const isEnabled = (flagKey: string) => {
    const flag = flags.find((flag) => flag.key === flagKey)
    return flag ? flag.enabled : false
  }

  return (
    <FeatureFlagsContext.Provider value={{ flags, toggleFlag, updateRollout, isEnabled }}>
      {children}
    </FeatureFlagsContext.Provider>
  )
}

export function useFeatureFlagsContext() {
  const context = useContext(FeatureFlagsContext)
  if (!context) {
    throw new Error('useFeatureFlagsContext must be used within a FeatureFlagsProvider')
  }
  return context
}