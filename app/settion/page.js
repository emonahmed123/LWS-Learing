

import { Suspense } from "react";
import SortProducts from "../component/SortProcut";


const Settion = () => {

    throw new Error('ERROR')
    return (
        <div>
            <h1>setting</h1>
            <Suspense>    <SortProducts /></Suspense>
        </div>
    );
};

export default Settion;