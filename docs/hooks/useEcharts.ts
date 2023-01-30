import { useEffect, useRef } from 'react'
import { useEventListener } from 'ahooks'

import * as echarts from 'echarts'
import type { EChartsOption, EChartsType } from 'echarts'

/**
 * 调用 echarts hook
 */
function useEcharts(options?: { defaultOptions?: EChartsOption }): {
  chart: React.MutableRefObject<echarts.ECharts | undefined>
  container: React.RefObject<HTMLDivElement>
} {
  const { defaultOptions } = options ?? {}
  const container = useRef<HTMLDivElement>(null)
  const chart = useRef<EChartsType>()
  const optionsRef = useRef(defaultOptions)

  useEffect(() => {
    if (!container.current) {
      return
    }

    const myEcharts = echarts.init(container.current)
    chart.current = myEcharts

    if (optionsRef.current) {
      myEcharts.setOption(optionsRef.current)
    }
  }, [])

  useEffect(() => {
    return () => {
      chart.current?.dispose?.()
      chart.current?.off?.('*')
      chart.current = undefined
    }
  }, [])

  useEventListener('resize', () => {
    requestAnimationFrame(() => {
      chart?.current?.resize?.()
    })
  })
  return { chart, container }
}

export default useEcharts
