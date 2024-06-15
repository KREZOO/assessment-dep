import type { Metadata } from 'next'

import Image from 'next/image'

import Header from '@/components/header'
import Footer from '@/components/footer'
import FeatureCard from '@/components/featureCard'

import locS from '@/styles/pages/homePageStyles.module.scss'
import globS from '@/styles/global.module.scss'

export const metadata: Metadata = {
   title: 'Сервіс для створення та проходження тестів',
   description:
      'Привіт! Цей веб-сервіс — ваш надійний помічник у створенні та проходженні тестів будь-якої складності. З нами ви зможете легко створювати, редагувати та проходити тести, відслідковувати свій прогрес та ділитися знаннями з іншими користувачами. Приєднуйтесь до нашої спільноти тестувальників прямо зараз!'
}

const Home = () => {
   return (
      <>
         <Header />

         <main className={locS.main}>
            <section className={locS.hero}>
               <div className={`${locS.heroWrapper} ${globS.container_1180}`}>
                  <div className={locS.heroTextContent}>
                     <h1 className={locS.heroTitle}>
                        Створіть та адаптуйте свої власні тести з нашим конструктором
                     </h1>

                     <p className={locS.heroDescription}>
                        Легко, швидко та ефективно створюйте власні тести з нашим інтуїтивно
                        зрозумілим конструктором тестів.
                     </p>
                  </div>

                  <Image
                     src="./images/hero-image.png"
                     alt="Hero image"
                     className={locS.heroImage}
                     width={505}
                     height={400}
                  />
               </div>
            </section>

            <section
               className={`
            ${locS.aboutSite} 
            ${globS.container_1180} 
            ${globS.mb_80}`}
            >
               <Image
                  src="./images/about-site.png"
                  alt="About site"
                  className={locS.aboutSiteImage}
                  width={340}
                  height={250}
               />

               <div className={locS.aboutSiteTextContent}>
                  <h2 className={locS.h2}>Про сайт</h2>

                  <p className={locS.aboutSiteText}>
                     Ласкаво просимо до нашого сайту &quot;Конструктор тестів&quot;! Наша платформа
                     розроблена з метою надання вам зручного та ефективного інструменту для
                     створення, редагування та проведення тестів у будь-якій області знань.
                  </p>

                  <p className={locS.aboutSiteText}>
                     Завдяки нашому конструктору тестів ви можете легко створювати власні тести або
                     використовувати готові шаблони для швидкого розпочатку.
                  </p>
               </div>
            </section>

            <section className={`${globS.container_1180} ${locS.mainFeatures}`}>
               <header className={locS.mainFeaturesHeader}>
                  <h2 className={locS.h2}>Основні можливості</h2>

                  <p className={locS.mainFeaturesDescription}>
                     &quot;Конструктор тестів&quot; надає великий набір безкоштовних інструментів
                     для створення тестів, їх публікації в Інтернеті та перегляду результатів. Ми
                     пропонуємо інтуїтивно зрозумілий користувацький інтерфейс та численні чудові
                     функції.
                  </p>
               </header>

               <main className={locS.mainFeaturesCards}>
                  <FeatureCard
                     image="/images/feature-image.png"
                     title="Користувацькі теми"
                     description="Наш безкоштовний конструктор опитувань пропонує великий вибір креативних готових шаблонів для вашого опитування. Ви також можете скористатися нашим інструментом налаштування, щоб створити власний унікальний дизайн теми."
                  />

                  <FeatureCard
                     image="/images/feature-image-2.png"
                     title="Швидко і просто"
                     description="Ми зробили все можливе, щоб зробити створення завдань якомога приємнішим. Наш конструктор онлайн-опитувань має найшвидший та найінтуїтивно зрозумілий користувацький інтерфейс. Створення онлайн-опитувань ще ніколи не було таким веселим і легким."
                  />

                  <FeatureCard
                     image="/images/feature-image-3.png"
                     title="Адаптивний дизайн"
                     description="За допомогою нашого безкоштовного конструктора ви можете створювати завдання, які працюють на мобільних пристроях, планшетах і стаціонарних комп'ютерах. Перш ніж опублікувати опитування, просто перейдіть у режим попереднього перегляду, щоб побачити, як воно виглядає на різних пристроях."
                  />

                  <FeatureCard
                     image="/images/feature-image-4.png"
                     title="Завантаження файлів"
                     description="Додавайте зображення до ваших тестів, щоб зробити їх більш захоплюючими та інформативними. Окрім зображень, ви можете завантажувати відео і навіть документи типу Word, Excel, і т.п. Це допоможе покращити досвід проходження тесту та забезпечить чіткіші інструкції для учасників."
                  />
               </main>
            </section>
         </main>

         <Footer />
      </>
   )
}

export default Home
