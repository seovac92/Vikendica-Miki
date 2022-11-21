import Image from 'next/image'

const About = () => {//stranica o nama,mozda neki side sa zanimljivostima u okolini!!!
    //react cloud
    //https://github.com/GoranKukic/portfolio/blob/main/src/components/Skills/icons.js
    //obavezno uraditi!!!
    return ( 
        <div className="about-wrapper">
            <main>
                <div className="about-hero hero-wrapper">
                    <div className="hero-text-wrapper">
                        <h1>ВИКЕНДИЦА<br/>МИКИ</h1>
                        <p>Уживајте у лепотама<br/>Таре</p>
                    </div>
                </div>
            </main>
            <aside>
                <article className="first-container">
                    <h2>О нама</h2>
                    <p>Већ више од 10 година се успешно бавимо туризмом и представљамо на прави начин наш град и природне лепоте овог краја, које остављају без даха и очаравају многе, како домаће, тако и стране туристе. После дугогодишњег рада у овом послу и бројних гостију који су се у већини случајева враћали сваке године и тиме нам одавали захвалност за наш предан рад, стекли смо огромно искуство са којим је и квалитет наших услуга константно растао, тако да су увек и изнова били изненађени на исти начин, као када су први пут дошли. У свему томе нам је умногоме помогла и сама природа која је непресушан извор прелепих пејзажа и могућности да се они кроз различите активности доживе на прави начин и заувек остану у сећању.</p>
                </article>
                <article className="second-container">
                <div className="image-container">
                    <Image className='profile-image' src="/profile.jpg" alt="mountain house" width={500} height={300}></Image>
                </div>
                <div className="family-business-container">
                    <h2>Викендица Мики</h2>
                    <ul>
                        <li>Приземље (дневни боравак, кухиња, трпезарија, спаваћа соба, купатило)</li>
                        <li>Спрат (три спаваће собе и купатило)</li>
                        <li>Испред је веранда са озиданим роштиљем</li>
                        <li>Капацитет до 13 особа</li>
                        <li>Потпуно природан, планински амбијент</li>
                    </ul>
                </div>
                </article>
            </aside>
        </div>
     );
}
 
export default About;