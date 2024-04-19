import "./PageTemplateStyles.css";

function PageTemplate (props){
    return(
        <>
           <div className={props.cName}>
                <img src = {props.bgImg} alt="TempImg" className="bgimg"/>

                <div className="page-text">
                    <h1>{props.title}</h1>
                    <p>{props.text} </p>
                </div>
           </div>
        </>
    )

}

export default PageTemplate;