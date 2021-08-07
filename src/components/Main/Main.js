import classes from './Main.module.css';
import Header from '../Header/Header';
import img_1 from '../../img/img-1.png';
import img_3 from '../../img/img-3.png';
import img_4 from '../../img/img-4.png';
import Card from '../cards/Cards';

function Main() {
    return (
        <main className={classes.main}>
           <Header></Header>
           <div className={classes.mid}>
               <img alt="display" src={img_1} className={classes.image}></img>
               <div className={classes.pic_con}>
                    <p className={classes.pic_head}>The gift of happiness</p>
                    <p className={classes.pic_des}>Show your gratitude with one of our gift sets, large and small,specially designed to spread joy to someone you love.</p>
                    <div className={classes.shopnow}>
                    <button>SHOP NOW</button>
                    </div>
               </div>
           </div>
           <div className={classes.foot}>
               <Card image={img_3} class={classes.upper}></Card>
               <Card image={img_4} class={classes.lower}></Card>
           </div>
        </main>
    );
}

export default Main;