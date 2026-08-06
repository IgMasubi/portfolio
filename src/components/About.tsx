import { RevealSection } from './RevealSection'

const portraitSource = new URL('../showreel/photo.png', import.meta.url).href

export function About() {
  return (
    <RevealSection id="info" className="about-section">
      <div className="about-layout">
        <div className="about-content">
          <h2>Обо мне</h2>
          <div className="about-body">
            <img className="portrait" src={portraitSource} alt="Портрет Игната Кобринюка" />
            <p className="bio">
              Моушн-дизайнер и 3D-дженералист.<br />
              Создаю 2D/3D-визуал, CGI и анимацию для рекламы,<br />
              выставочных экранов и digital-проектов.<br />
              Классический production-пайплайн и AI-инструменты —<br />
              от идеи и визуального направления до финальной сборки.
            </p>
          </div>
        </div>
        <address className="contacts">
          <h3>Контакты</h3>
          <a href="mailto:ig@masubi.ru"><span className="contact-icon contact-icon-mail" aria-hidden="true" />ig@masubi.ru</a>
          <a href="tel:+79181856800"><span className="contact-icon contact-icon-phone" aria-hidden="true" />+7 918 185 68 00</a>
          <a href="https://t.me/masubi" target="_blank" rel="noreferrer"><span className="contact-icon contact-icon-telegram" aria-hidden="true" />t.me/masubi</a>
        </address>
      </div>
    </RevealSection>
  )
}
