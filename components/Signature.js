import { useState } from "react";

export default function Signature(props){
    const linkedinLink = `https://www.linkedin.com${props.linkedin}`
    const test = {
        body:`<table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed"><tbody><tr><td valign="top" align="left"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:500px;margin:0" align="left"><tbody><tr><td valign="top" align="left" style="padding:0 10px"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td valign="top"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td valign="top" style="font-size:0;text-align:center;display:flex"><div style="display:inline-block;width:100%;max-width:250px;vertical-align:top"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td valign="top"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td valign="top" align="left"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td valign="top"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td valign="top" align="left"><span style="font-family:'Fira Sans',Helvetica,Arial,sans-serif;font-size:24px;font-weight:700;color:#252525;text-decoration:none;line-height:34px;letter-spacing:-.4px">Shachar Landshut</span></td><td style="font-size:1px;line-height:1px" height="8">&nbsp;</td></tr></tbody><tbody><tr><td valign="top" align="left" style="line-height:20px;font-family:'Fira Sans',Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;color:#252525">CMO</td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div style="display:inline-block;width:100%;max-width:250px;vertical-align:top"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-left:10px"><tbody><tr><td valign="top" align="left" style="line-height:20px;font-family:'Fira Sans',Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;color:#252525;display:flex"><img src="https://drive.google.com/uc?id=1r_zyoFy7PAMY-MzHa-OSduKqaESaNGn8&amp;export=download" height="18" style="margin-right:5px" width="18"> <span>+972-54-451-2750</span></td></tr><tr><td style="font-size:1px;line-height:1px" height="8">&nbsp;</td></tr><tr><td valign="top" align="left" style="line-height:20px;font-family:'Fira Sans',Helvetica,Arial,sans-serif;font-size:14px;font-weight:500"><a href="https://loadmill.com" style="text-decoration:none;color:#252525;display:flex" target="_blank"><img src="https://drive.google.com/uc?id=198mJXgV-oLFOVyCX2jpxsUStuo3f-CjY&amp;export=download" height="18" style="margin-right:5px" width="18"> <span>loadmill.com</span></a></td></tr><tr><td style="font-size:1px;line-height:1px" height="8">&nbsp;</td></tr><tr><td valign="top" align="left" style="line-height:20px;font-family:'Fira Sans',Helvetica,Arial,sans-serif;font-size:14px;font-weight:500"><a href="https://www.linkedin.com/in/shacharke/" style="text-decoration:none;color:#252525;display:flex" target="_blank"><img src="https://drive.google.com/uc?id=1WG5v8C8DJTiyCnN6XuqZJAA1svryIqEG&amp;export=download" height="18" style="margin-right:5px" width="18"> <span>in/shacharke</span></a></td></tr></tbody></table></div></td></tr></tbody></table></td></tr></tbody></table><img src="https://drive.google.com/uc?id=1YgfUN6ytIxxqGsgD4xPiTyN_Z827yZba&amp;export=download"></td></tr></tbody></table></td></tr></tbody></table><div style="white-space:nowrap;font:15px courier;line-height:0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>`
    }

    return(
        // <code dangerouslySetInnerHTML={{__html: html}}></code>
        <main>
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed">
            <tbody>
                <tr>
                    <td valign="top" align="left">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px; margin: 0"
                            align="left">
                            <tbody>
                                <tr>
                                    <td valign="top" align="left" style="padding: 0 10px">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td valign="top">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td valign="top" style="font-size: 0;text-align: center;display: flex;">
                                                                        <div style="display: inline-block;width: 100%;max-width: 250px;vertical-align: top;">
                                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                                width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td valign="top">
                                                                                            <table border="0" cellpadding="0"
                                                                                                cellspacing="0" width="100%">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td valign="top"
                                                                                                            align="left">
                                                                                                            <table border="0"
                                                                                                                cellpadding="0"
                                                                                                                cellspacing="0"
                                                                                                                width="100%">
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                        <td
                                                                                                                            valign="top">
                                                                                                                            <table
                                                                                                                                border="0"
                                                                                                                                cellpadding="0"
                                                                                                                                cellspacing="0"
                                                                                                                                width="100%">
                                                                                                                                <tbody>
                                                                                                                                    <tr>
                                                                                                                                        <td valign="top"
                                                                                                                                            align="left">
                                                                                                                                            <span
                                                                                                                                                style="font-family: 'Fira Sans',Helvetica,Arial,sans-serif;font-size: 24px;font-weight: 700;color: #252525;text-decoration: none;line-height: 34px;letter-spacing: -0.4px;">{props.name}</span>
                                                                                                                                        </td>
                                                                                                                                        <td style="font-size: 1px;line-height: 1px;" height="8">
                                                                                                                                            &nbsp;
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                </tbody>
                                                                                                                                <tbody>
                                                                                                                                    <tr>
                                                                                                                                        <td valign="top"
                                                                                                                                            align="left"
                                                                                                                                            style="line-height: 20px;font-family: 'Fira Sans',Helvetica,Arial,sans-serif;font-size: 14px;font-weight: 500;color: #252525;">{props.position}
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                </tbody>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                        <div style="display: inline-block;width: 100%;max-width: 250px;vertical-align: top;">
                                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                                width="100%" style="margin-left: 10px">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td valign="top" align="left" style="line-height: 20px;font-family: 'Fira Sans', Helvetica,Arial, sans-serif;font-size: 14px;font-weight: 500;color: #252525;display: flex;">
                                                                                            <img src="https://drive.google.com/uc?id=1r_zyoFy7PAMY-MzHa-OSduKqaESaNGn8&amp;export=download"
                                                                                                height="18"
                                                                                                style="margin-right: 5px"
                                                                                                width="18" />
                                                                                            <span>{props.phone}</span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td style="font-size: 1px;line-height: 1px;" height="8">&nbsp;
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td valign="top" align="left" style="line-height: 20px;font-family: 'Fira Sans', Helvetica,Arial, sans-serif;font-size: 14px;font-weight: 500;">
                                                                                            <a href="https://loadmill.com"style="text-decoration: none;color: #252525;display: flex;" target="_blank"><img src="https://drive.google.com/uc?id=198mJXgV-oLFOVyCX2jpxsUStuo3f-CjY&amp;export=download"height="18"style="margin-right: 5px"width="18" />
                                                                                                <span>loadmill.com</span></a>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td style="font-size: 1px;line-height: 1px;" height="8">&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td valign="top" align="left" style="line-height: 20px;font-family: 'Fira Sans', Helvetica,Arial, sans-serif;font-size: 14px;font-weight: 500;">
                                                                                            <a href={linkedinLink} style="text-decoration: none;color: #252525; display: flex;" target="_blank"><img src="https://drive.google.com/uc?id=1WG5v8C8DJTiyCnN6XuqZJAA1svryIqEG&amp;export=download"height="18"style="margin-right: 5px"width="18" /><span>{props.linkedin}</span></a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <img
                                            src="https://drive.google.com/uc?id=1YgfUN6ytIxxqGsgD4xPiTyN_Z827yZba&amp;export=download" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        <div style="white-space: nowrap; font: 15px courier; line-height: 0">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
        </main>
    )
}


