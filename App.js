import {React,useRef,useEffect} from "react";

const UseRefBasics = () =>{
    const refContainer = useRef();
    function handleSubmit(e) {
        e.preventDefault();
        console.log(refContainer.current.value);
    };

    useEffect(() =>{
        console.log(refContainer.current.value);
        refContainer.current.focus();
    });

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer}/>
                </div>
                <button type='submit'>submit</button>
            </form>
        </>
    )
};

export default UseRefBasics;