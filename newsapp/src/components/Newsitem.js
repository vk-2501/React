import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    
      let {title,description,imageUrl,newsUrl,author,date}=this.props;
    return (
      <div className="my-3">
                <div className="card" >
        <img src={!imageUrl?"https://www.google.com/search?q=random+news+image&rlz=1C1OKWM_enIN954IN954&sxsrf=ALiCzsaUZC7p-UNGuS_8fnIlrYehW0v_jw:1654613479645&tbm=isch&source=iu&ictx=1&vet=1&fir=-0IJltR6VQFyrM%252C2t78_U1IKTdDXM%252C_%253Bt1n7f6GTmUV18M%252CCsZGTeXGGmiyJM%252C_%253Bs-stGLC5-IzXxM%252CjesZPz9a3gR0iM%252C_%253BQP-X8u_37obXfM%252CjaFjJJUBhdj_XM%252C_%253BXlNUUTIE6mDTZM%252CDw7deD5gVl67SM%252C_%253BPcJO8clgndEmgM%252ChCUo_ZEJB0c7lM%252C_%253BqRFtkSkxV_27TM%252CjaFjJJUBhdj_XM%252C_%253BB1IkxY4EC5inCM%252C9GEcrP2J-MjsjM%252C_%253BCZ9OJB6t_GWkcM%252CDw7deD5gVl67SM%252C_%253B5Ixvz18mQVmUPM%252CX0QFcdLWHbSUVM%252C_&usg=AI4_-kTEFLvheGDQce-A8OREtmiKsPOQTg&sa=X&ved=2ahUKEwjencfFy5v4AhUcSmwGHeUkBqsQ9QF6BAgIEAE#imgrc=t1n7f6GTmUV18M&imgdii=hQWKRpjUNCqivM":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer"href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
            <p class="card-text"><small class="text-muted">By {author!=null?author:"unknown"} on {date}</small></p>
        </div>
        </div>
      </div>
    )
  }
}
