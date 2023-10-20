import style from "./card.module.css"

const Cards = () => {
  return (
    <div className={style.card}>
      <img src="" alt="todo-list" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        saepe distinctio in amet repellendus soluta voluptate quo quos maiores.
        Quibusdam quod repudiandae saepe harum doloremque sequi laborum est eos
        error?
      </p>
      <div className={style.buttons} >
        <a href="">gitHub</a>
      </div>
    </div>
  );
};


export default Cards