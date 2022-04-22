import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Android: React.MemoExoticComponent<React.ForwardRefExoticComponent<AndroidProps>> = createPathIcon(
    <path fillRule="evenodd" d="M10.7615 9.8932a.5125.5125 0 0 1-.2778-.0814.4872.4872 0 0 1-.1842-.2169.4683.4683 0 0 1-.0284-.2791.4786.4786 0 0 1 .1368-.2474.5054.5054 0 0 1 .256-.1323.5163.5163 0 0 1 .2889.0275.4964.4964 0 0 1 .2244.178.472.472 0 0 1 .0843.2684.475.475 0 0 1-.1465.3417.509.509 0 0 1-.3535.1415Zm-5.523 0a.5125.5125 0 0 1-.2777-.0814.4872.4872 0 0 1-.1842-.2169.4681.4681 0 0 1-.0285-.2791.4784.4784 0 0 1 .1369-.2474.5056.5056 0 0 1 .256-.1323.5162.5162 0 0 1 .2889.0275.4968.4968 0 0 1 .2244.178.4717.4717 0 0 1 .0842.2684.4751.4751 0 0 1-.1464.3417.509.509 0 0 1-.3536.1415Zm5.7021-2.9087.9988-1.671a.1945.1945 0 0 0 .0299-.1576.1985.1985 0 0 0-.0354-.0743.2063.2063 0 0 0-.0631-.0545.2138.2138 0 0 0-.2391.0206.2028.2028 0 0 0-.0521.0645l-1.0113 1.6925A6.4616 6.4616 0 0 0 8 6.2737c-.8853 0-1.7606.1809-2.5683.531L4.4204 5.1122a.2025.2025 0 0 0-.0521-.0645.2106.2106 0 0 0-.0744-.039.2151.2151 0 0 0-.1647.0184.206.206 0 0 0-.063.0545.1948.1948 0 0 0-.0055.2319l.9987 1.671c-1.715.9013-2.8877 2.579-3.0594 4.561h12c-.1717-1.982-1.3446-3.6597-3.0594-4.561Z" />
, 
    'Android'
)

type AndroidRef = PathIconRef

type AndroidProps = PathIconProps

export {
    Android
}

export type {
    AndroidRef,
    AndroidProps
}

export default Android
