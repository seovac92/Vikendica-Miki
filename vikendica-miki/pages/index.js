import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="home-wrapper">
      <main>
        <div className="home-hero-wrapper">
          <div className="home-hero-text-wrapper">
            <h1>ВИКЕНДИЦА<br/>МИКИ</h1>
            <p>Уживајте у лепотама<br/>Таре</p>
          </div>
        </div>
        <aside>
          <div className="mountain-content">
            <h2>Планина Тара спада у један од пет Националних паркова и налази се у западној Србији</h2>
            <p></p>
          </div>
        </aside>
      </main>
    </div>
  )
}
