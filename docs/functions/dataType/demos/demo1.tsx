import { useMemo } from 'react'

import { dataType } from 'data-design'

const Demo = () => {
  const target = 'test'

  const result = useMemo(() => dataType({ target, type: 'isObject' }), [])

  return (
    <div>
      <div>Target: {target}</div>
      <div>Resul: {result ? 'yes' : 'no'}</div>
    </div>
  )
}

export default Demo
