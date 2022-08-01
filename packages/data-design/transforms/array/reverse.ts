import { Transforms } from '..'

Transforms.registerTransform('reverse', (dataSource: any[]) => {
	if (dataSource != undefined && dataSource !== null) {
		return dataSource.reverse()
	}
	return dataSource
})
