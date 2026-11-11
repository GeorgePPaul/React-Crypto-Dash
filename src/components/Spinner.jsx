<<<<<<< HEAD
import { BarLoader } from "react-spinners";

const override = {
    display: 'block',
    margin: '0 auto 50 px auto'
}

const Spinner = ({color = 'blue', size = '150'}) => {
    return ( 
        <div>
            <BarLoader
                color={color}
                size={size}
                cssOverride={override}
                aria-label="Loading..."
            />
        </div>
     );
}
 
=======
import { BarLoader } from "react-spinners";

const override = {
    display: 'block',
    margin: '0 auto 50 px auto'
}

const Spinner = ({color = 'blue', size = '150'}) => {
    return ( 
        <div>
            <BarLoader
                color={color}
                size={size}
                cssOverride={override}
                aria-label="Loading..."
            />
        </div>
     );
}
 
>>>>>>> 88ce4d2e13218c54719134b60d778fde5870fb8b
export default Spinner;