var data = [
  {
    author:{
      avatarUrl: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
      name:"neo"
    },
    commentHeading: "I am the One.",
    text: "Humanity, relax. I will save you.",
    date: "Today",
    userBadge: [ 
      'Superman',
      'Herald',
      'Engineer'
    ]
  },
  {
    author:{
      avatarUrl: "https://maxcdn.icons8.com/Color/PNG/512/Cinema/morpheus-512.png",
      name:"Morpheus"
    },
    commentHeading: "There is no spoon.",
    text: "Don't htink you are. KNow you are.",
    date: "Two days ago",
    userBadge: [ 
      'The man',
      'Bard',
      'Samurai swordsman'
    ]
  }
]





function Comment(props) {
 return (
 <div className="Comment">
 <div className="UserInfo">
 <img className="Avatar"
 src={props.data.author.avatarUrl}
 alt={props.data.author.name}
 />
 <div className="UserInfo-name">
 {props.data.author.name}
 </div>
 </div>
 <div className="Comment-body">
 <h1>{props.commentHeading}</h1>
 <div className="Comment-text">{props.data.text}</div>
 <div className="Comment-date">
 {(props.data.date)}
 </div>
 </div>
 <div className="UserBadges">
 <div className="badge">{props.data.userBadge[0]}</div>
 <div className="badge">{props.data.userBadge[1]}</div>
 <div className="badge">{props.data.userBadge[2]}</div>
 </div>
 </div>
 );
}

ReactDOM.render(
  // <h1>Sanity Check!</h1>,
 <div>
    <Comment data={data[0]}/>
     <Comment data={data[1]}/>
</div>,
  document.getElementById('root')
)