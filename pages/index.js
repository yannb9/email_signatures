import styles from '../styles/Home.module.css'
import { Grid, Card, Text, Input, Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
// import Signature from '../components/Signature'

export default function Home() {
  const [name,setName] = useState('');
  const [position,setPosition] = useState('');
  const [number,setNumber] = useState('');
  const [linkedin,setLinkedin] = useState('');
  const [fontSize,setFontSize] = useState('');
  const [debug, setDebug] = useState(false)

  useEffect(() => {
    console.log(document.cookie)
    document.cookie.indexOf('debug')>-1 ? setDebug(true) : setDebug(false);
  });

  const formatPhone = (input) =>{
    var formatted = input.replace(/(^\+\d{3})(\d{2})(\d{3})(\d{4})/,'$1-$2-$3-$4')
    setNumber(formatted)
  }


  const html = {
    body:`<table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed"><tbody>
    <tr><td valign="top" align="left"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:500px;margin:0" align="left">
    <tbody><tr><td valign="top" align="left" style="padding:0 10px"><table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tbody><tr><td valign="top"><table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tbody><tr><td valign="top" style="font-size:0;text-align:center;display:flex">
    <div style="display:inline-block;width:100%;max-width:250px;vertical-align:top">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tbody><tr><td valign="top"><table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tbody><tr><td valign="top" align="left"><table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tbody><tr><td valign="top"><table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tbody><tr><td valign="top" align="left">
    <span style="font-family:'Fira Sans',Helvetica,Arial,sans-serif;font-size:${fontSize ? fontSize+'px' : '22px'};font-weight:700;color:#252525;text-decoration:none;line-height:34px;letter-spacing:-.4px">${name}</span></td>
    <td style="font-size:1px;line-height:1px" height="8">&nbsp;</td></tr></tbody>
    <tbody><tr><td valign="top" align="left" style="line-height:20px;font-family:'Fira Sans',Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;color:#252525">${position}</td></tr></tbody>
    </table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>
    <div style="display:inline-block;width:100%;max-width:250px;vertical-align:top">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-left:10px">
    <tbody>
    ${number.length? `<tr><td valign="top" align="left" style="line-height:20px;font-family:'Fira Sans',Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;color:#252525;display:flex">
    <img src="https://drive.google.com/uc?id=1r_zyoFy7PAMY-MzHa-OSduKqaESaNGn8&amp;export=download" height="18" style="margin-right:5px" width="18">
    <span>${number.replace(/(^\+\d{3})(\d{2})(\d{3})(\d{4})/,'$1-$2-$3-$4')}</span></td></tr>` :''}

    <tr><td style="font-size:1px;line-height:1px" height="8">&nbsp;</td></tr><tr><td valign="top" align="left" style="line-height:20px;font-family:'Fira Sans',Helvetica,Arial,sans-serif;font-size:14px;font-weight:500"><a href="https://loadmill.com" style="text-decoration:none;color:#252525;display:flex" target="_blank"><img src="https://drive.google.com/uc?id=198mJXgV-oLFOVyCX2jpxsUStuo3f-CjY&amp;export=download" height="18" style="margin-right:5px" width="18"> <span>loadmill.com</span></a></td></tr><tr><td style="font-size:1px;line-height:1px" height="8">&nbsp;</td></tr><tr><td valign="top" align="left" style="line-height:20px;font-family:'Fira Sans',Helvetica,Arial,sans-serif;font-size:14px;font-weight:500"><a href="https://www.linkedin.com/${linkedin}" style="text-decoration:none;color:#252525;display:flex" target="_blank"><img src="https://drive.google.com/uc?id=1WG5v8C8DJTiyCnN6XuqZJAA1svryIqEG&amp;export=download" height="18" style="margin-right:5px" width="18"> <span>${linkedin}</span></a></td></tr></tbody></table></div></td></tr></tbody></table></td></tr></tbody></table><img src="https://drive.google.com/uc?id=1YgfUN6ytIxxqGsgD4xPiTyN_Z827yZba&amp;export=download"></td></tr></tbody></table></td></tr></tbody></table><div style="white-space:nowrap;font:15px courier;line-height:0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>`
}

  return (
    <div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <Text h1 size={60} style={{marginRight: 20}} css={{textGradient: '45deg, $blue500 -20%, $pink500 50%'}} weight="bold"> Start</Text>
        <Text h1 size={60} style={{marginRight: 20}} css={{textGradient: '45deg, $purple500 -20%, $pink500 100%'}} weight="bold">Integrate</Text>
        <Text h1 size={60} style={{marginRight: 20}} css={{textGradient: '45deg, $yellow500 -20%, $red500 100%'}} weight="bold">Signatures!</Text>
      </div>
    
    <Grid.Container gap={10} alignItems="" direction="row" justify="center" css={{ height: "350px" }}>
      <Grid xs={4} direction="column">
        <Text h3 css={{textGradient: '45deg, $blue500 -20%, $pink500 50%'}} weight="bold">Setup</Text>
        <div style={{display:'flex', flexDirection:'column', justifyContent: 'center'}}>
          <div style={{marginBottom:'10px'}}><Input aria-label clearable style={{width: '400px !important'}} onChange={e=>setName(e.target.value)} type="text" id="name" placeholder="Full Name" /></div>
          <div style={{marginBottom:'10px'}}><Input aria-label clearable style={{width: '400px !important'}} onChange={e=>setPosition(e.target.value)} type="text" id="position" placeholder="Position - ex: Software Engineer" /></div>
          <div style={{marginBottom:'10px'}}><Input aria-label clearable style={{width: '400px !important'} }onChange={e=>formatPhone(e.target.value)} type="text" id="phone" placeholder="Phone Number" initialValue='+972' /></div>
          <div style={{marginBottom:'10px'}}><Input aria-label clearable style={{width: '400px !important'}} onChange={e=>setLinkedin(e.target.value)} type="url" id="linkedinult" placeholder="Linkedin path - in/yourname/" initialValue="in/"/></div>
          {
            debug ? <div style={{width:'100%',marginBottom:'10px'}}><Input aria-label clearable style={{width: '400px !important'}} onChange={e=>setFontSize(e.target.value)} type="text" id="font-size" placeholder="Enter font size (22px is the default)" /></div> : ''
          }

        </div>
      </Grid>
      <Grid xs={4} direction="column">
        <Text h3 css={{textGradient: '45deg, $blue500 -20%, $pink500 50%'}} weight="bold">Code</Text>
        <code style={{overflow:'auto', height:'300px'}}>{html.body}</code>
        <Button shadow color="gradient" auto style={{width: '100% !important', marginTop:'15px'}}  onClick={() => {navigator.clipboard.writeText(html.body)}}>Copy signature code</Button>
      </Grid>
      <Grid xs={4} direction="column">
      <Text h3 css={{textGradient: '45deg, $blue500 -20%, $pink500 50%'}} weight="bold">Preview</Text>
        <div dangerouslySetInnerHTML={{__html: html.body}}></div>
      </Grid>
    
  </Grid.Container>
   
  </div>
  )
}