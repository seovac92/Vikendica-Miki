export default function Home() {
  return (
    <div className="home-wrapper">
      <main>
        <div className="home-hero hero-wrapper">
          <div className="hero-text-wrapper">
            <h1>ВИКЕНДИЦА<br/>МИКИ</h1>
            <p>Уживајте у лепотама<br/>Таре</p>
          </div>
        </div>
      </main>
      <aside>
        <article className="first-container">
          <h2>Планина Тара</h2>
          <p>Спада у један од пет Националних паркова Србије и станисте је многих ретких биљних и животињских врста. Прелепи видиковци са којих се пружају незаборавни погледи само су неки од многобројних атракција које ће свима, који на тој планини одлуче да одморе од свакодневне градске гужве, пружити несвакидашње искуство.</p>
        </article>
        <article className="second-container">
          <div className="map-container">
            <label htmlFor="map">ЛОКАЦИЈА</label>
            <iframe id="map" className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2873.338952903434!2d19.4627349157837!3d43.93165834239713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759b3ccf19eff1d%3A0xf7c7f749416c73a3!2z0JLQuNC60LXQvdC00LjRhtCwINCc0JjQmtCY!5e0!3m2!1sen!2srs!4v1668777006334!5m2!1sen!2srs" allowFullScreen="" loading="lazy"></iframe>
          </div>
          <div className="family-business-container">
            <h2>Викендица Мики</h2>
            <ul>
              <li>Планина Тара, место Ослуша</li>
              <li>Висина око 1000&nbsp;м</li>
              <li>Окружена бројним видиковцима</li>
              <li>У близини реке Дрине, језера Перућац и Заовине</li>
            </ul>
          </div>
        </article> 
        <h3>Савршено место за одмор!</h3> 
      </aside>
    </div>
  )
}
