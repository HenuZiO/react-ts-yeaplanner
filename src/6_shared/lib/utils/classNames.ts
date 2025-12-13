import classNames from 'classnames'
import type { ArgumentArray } from 'classnames'

export const cn = (...args: ArgumentArray) => {
    return classNames(...args)
}
