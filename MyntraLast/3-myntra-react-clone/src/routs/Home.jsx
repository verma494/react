import HomeItem from "../components/Homeitems";
import { useSelector } from "react-redux";
const Home = ()=>{
    const items = useSelector(store=>store.items);
    return <main>
    <div className="items-container">
        {items.map(item=><HomeItem item ={item}/>)}
      
    </div>
</main>
}

export default Home;