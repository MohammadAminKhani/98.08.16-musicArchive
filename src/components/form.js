import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

export const Add = ({date,music,like,submit1}) =>{
  function submit(e) {e.preventDefault();
    submit1({
      date:ref1.value,
      music: ref2.value,
      like: ref3.checked
    })
    ref1.value = ""
    ref2.value = ""
    ref3.checked = false
  }
  let ref1,ref2,ref3
  return( <div>
<form onSubmit={submit}>
  <div >
  <TextField label="Date" name="date" inputRef={ x => ref1 = x }
  defaultValue={date} required autoComplete='off'/>
  </div>
  <div >
  <TextField label="Music" name="music" inputRef={ x => ref2 = x }
  defaultValue={music} required autoComplete='off'/>
  </div>
  <div >
  <FormControlLabel
  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />}
  name="like" defaultChecked={like} inputRef={ x => ref3 = x }  />}
  label="like the music?" />
  </div>
  <Button type='submit'>OK</Button>
</form></div>)}
Add.defaultProps={
  date: new Date().toLocaleDateString(),
  music: "misician - title",
  like: true
}
Add.propTypes={
  date: PropTypes.string.isRequired,
  music: PropTypes.string.isRequired,
  like: PropTypes.bool
}
