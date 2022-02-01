import React from "react";
import '../../../Css/Layout/Home/BloqueSede.css'

function BloqueSede() {
    return(
        <section className="sede" id="sede">
            <h1>Visítanos en nuestra sede</h1>
            <div className="sede__contain" data-aos="fade-up">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.714768616809!2d-75.22147968578749!3d-12.06313564548822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e9640d17f31b3%3A0xa39c4d64ffbd66dc!2sCl%C3%ADnica%20Cayetano%20Heredia!5e0!3m2!1ses-419!2spe!4v1641832939044!5m2!1ses-419!2spe" loading="lazy"></iframe>
                <div className="sede__contain--capa"></div>
            </div>
        </section>
    )
}

export {BloqueSede}