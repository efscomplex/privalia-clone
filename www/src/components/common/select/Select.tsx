import React from 'react'
import styled from 'styled-components'

const Option = ({ label, children }: any) => (
   <option>{label || children}</option>
)

export default function Select({ options, label }: any) {
   return (
      <Wrap>
         <option>{label}</option>
         {options.map((option: any) => (
            <Option key={option} value={option}>
               {option}
            </Option>
         ))}
      </Wrap>
   )
}
const Wrap = styled('select')`
   padding: 7px 1rem;
`
export { Select }
