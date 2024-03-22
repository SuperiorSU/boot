import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
const Acoordian = (props) => {
  return (
    <>
    <Accordion className='w-100  object-fit-cover' defaultActiveKey="0" flush>
    {
      props.data.map((row)=>{
        return  <Accordion.Item className='hover:cursor-pointer' eventKey={row.No} >
        <Accordion.Header >{row.title}</Accordion.Header>
        {
          row.category.map((e)=>{
            return     <Accordion.Body className='py-1' onClick={() => { props.action(row.title,e) }} >{e}</Accordion.Body>
          })
        }
      </Accordion.Item>
      })
    }
</Accordion>
</>
  )
}

export default Acoordian