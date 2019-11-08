import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import { IoMdHeartEmpty } from "react-icons/io";
import '../css/style.css'

export const Tbl = ({key01,filter1}) =>{
  const key001 = !filter1 || !filter1.match(/like/) ?
  key01 : key01.filter(x => x[filter1])
  return (
    <div>
    <table className="tbl">

    <thead >
    <th colSpan={3}>
    <NavLink exact className='tblLink' activeClassName='selected'
     to="/table">All Musics</NavLink>
    <NavLink className='tblLink' activeClassName='selected'
     to="/table/like">Liked Musics</NavLink>
    </th>
    </thead>
    <div className='tbody'>  </div>
    <tbody > {key001.map(Fn2)} </tbody> </table> </div>)}

const Fn2 = ({date,music,like}) =>
 <tr className='fn2tr'>
   <td className='td1'>{date}</td>
   <td className='td2'>{music}</td>
   <td className='td3'>{like ? <IoMdHeartEmpty/> : null}</td>
 </tr>
