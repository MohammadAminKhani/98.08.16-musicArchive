import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { IoMdHeartEmpty } from "react-icons/io";
import Button from '@material-ui/core/Button'
import '../css/style.css'

export const Tbl = ({key01,filter1}) =>{
  const key001 = !filter1 || !filter1.match(/like/) ?
  key01 : key01.filter(x => x[filter1])
  return (
    <div className="tbl">
    <table>
    <thead >
    <th colSpan={3}>
    <Button variant="contained" color="primary">
    <Link exact className='tblLink' to="/table">All</Link></Button>
    <Button variant="contained" color="primary">
    <Link className='tblLink' to="/table/like">Liked</Link></Button>
    </th>
    </thead>
    <tbody > {key001.map(Fn2)} </tbody>
    </table>
    </div>)}

const Fn2 = ({date,music,like}) =>
 <tr className='fn2tr'>
   <td className='td1'>{date}</td>
   <td className='td2'>{music}</td>
   <td className='td3'>{like ? <IoMdHeartEmpty/> : null}</td>
 </tr>
