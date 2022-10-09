import { useContext } from "react";
import DataContext from "./DataContext";

function Tasks() {

    const { tasks } = useContext(DataContext);

    return (
        <>
            {tasks?.map((t, i) => <div key={i}>{t.title}</div>)}
        </>
    );
}

export default Tasks;