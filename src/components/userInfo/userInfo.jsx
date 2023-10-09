import style from "./info.module.css"
import avatar from "../../../public/avatar.jpg"

const userInfo = () => {
  return (
    <div className={style.info}>
      <h1>Olá, <br />meu nome é <br /> <span className={style.userName}>Willian Giovanini Dei Tosi</span>
      <br />desenvoldedor FullStack</h1>
      <div className={style.boxAvatar}><img className={style.avatar} src={avatar} alt="" /></div>
    </div>
  )
}

export default userInfo