import { css } from 'styled-components'

const GridTemplateColumns = css`
    .grid-cols-none { grid-template-columns: none; }
    .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
    .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    .grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
    .grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
    .grid-cols-7 { grid-template-columns: repeat(7, minmax(0, 1fr)); }
    .grid-cols-8 { grid-template-columns: repeat(8, minmax(0, 1fr)); }
    .grid-cols-9 { grid-template-columns: repeat(9, minmax(0, 1fr)); }
    .grid-cols-10 { grid-template-columns: repeat(10, minmax(0, 1fr)); }
    .grid-cols-11 { grid-template-columns: repeat(11, minmax(0, 1fr)); }
    .grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }
    .grid-cols-13 { grid-template-columns: repeat(13, minmax(0, 1fr)); }
    .grid-cols-14 { grid-template-columns: repeat(14, minmax(0, 1fr)); }
    .grid-cols-15 { grid-template-columns: repeat(15, minmax(0, 1fr)); }
    .grid-cols-16 { grid-template-columns: repeat(16, minmax(0, 1fr)); }
`

export default GridTemplateColumns