import { useContext } from "react";
import DataContext from "./DataContext";

function Tasks() {

    const { tasks } = useContext(DataContext);

    return (
        <>
            {tasks?.map((t) => <div key={t.id}>{t.title}</div>)}
        </>
    );
}

export default Tasks;