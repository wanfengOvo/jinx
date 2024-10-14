import { makeInstaller } from '@jinx/utils'
import components from './components'
import '@jinx/theme/index.css'
const installer = makeInstaller(components)

export * from '@jinx/components'
export default installer