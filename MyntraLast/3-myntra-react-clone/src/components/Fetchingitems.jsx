import { useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { itemActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";
const Fetchitems = ()=>{
    const fetchStatus = useSelector(store=>store.fetchStatus);
    const dispatch = useDispatch();
    useEffect(() => {
        if(fetchStatus.fetchDone) return;
        const controller = new AbortController();
        const signal = controller.signal;
        
        
        fetch("http://localhost:8080/items", { signal })
          .then((res) => res.json())
          .then(({items}) => {
            
            dispatch(itemActions.addInitialItems(items[0]));
            console.log("items are",items)
          });
    
        return () => {
          console.log("Cleaning up UseEffect.");
          controller.abort();
        };
      }, [fetchStatus]);
    return <>
    <div>
        fetchDone : {fetchStatus.fetchDone}
        currentlyFetching: {fetchStatus.currentlyFetching}
    </div>
    </>

}
export default Fetchitems;