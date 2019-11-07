import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import { IoMdHeartEmpty } from "react-icons/io";

export const Tbl = ({key01,filter1}) =>{
  const key001 = !filter1 || !filter1.match(/like/) ?
  key01 : key01.filter(x => x[filter1])
  return (
    <div>
    <div style={{textAlign:"center"}}>
    <Link style={{padding:"0 10px"}} to="/table">All Musics</Link>
    <Link to="/table/like">Liked Musics</Link>
    </div>
    <table><thead><tr><th>date</th><th>music</th><th>like</th></tr></thead>
    <tbody> {key001.map(Fn2)} </tbody> </table> </div>)}

const Fn2 = ({date,music,like}) =>
 <tr>
   <td>{date}</td>
   <td>{music}</td>
   <td>{like ? <IoMdHeartEmpty/> : null}</td>
 </tr>
